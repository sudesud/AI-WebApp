import { OpenAI } from 'openai'
import sql from '../configs/db.js';
import { clerkClient } from '@clerk/express';
import axios from 'axios';
import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
import pdf from "pdf-parse-fork";






const AI = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export const generateArticle=async(req,res)=>{
    try {
        const {userId}=req.auth();
        const {prompt,length}=req.body;
        const plan=req.plan;
        const free_usage=req.free_usage;
        
        if(plan!=='premium' && free_usage>=10){
            return res.json({success:false,message:'You have reached your limit of free usage'})

        }
        const response = await AI.chat.completions.create({
    model: "gemini-2.0-flash",
    messages: [
        {
            role: "user",
            content: prompt,
        },
    ],
    temperature:0.7,
    max_tokens:length,
});
    const content =response.choices[0].message.content;
    await sql `INSERT INTO creations (user_id,prompt,content,type) VALUES (${userId},${prompt},${content},'article')`

    if(plan!=='premium'){
        await clerkClient.users.updateUserMetadata(userId,{
            privateMetadata:{
                free_usage:free_usage+1
            }
        })
    }
    res.json({success:true,content})
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
}

export const generateBlogTitle=async(req,res)=>{
    try {
        const {userId}=req.auth();
        const {prompt}=req.body;
        const plan=req.plan;
        const free_usage=req.free_usage;
        
        if(plan!=='premium' && free_usage>=10){
            return res.json({success:false,message:'You have reached your limit of free usage'})

        }
        const response = await AI.chat.completions.create({
    model: "gemini-2.0-flash",
    messages: [
        {
            role: "user",
            content: prompt,
        },
    ],
    temperature:0.7,
    max_tokens:100,
});
    const content =response.choices[0].message.content;
    await sql `INSERT INTO creations (user_id,prompt,content,type) VALUES (${userId},${prompt},${content},'blog-title')`

    if(plan!=='premium'){
        await clerkClient.users.updateUserMetadata(userId,{
            privateMetadata:{
                free_usage:free_usage+1
            }
        })
    }
    res.json({success:true,content})
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
}

export const generateImage = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { prompt, publish } = req.body;
        const plan = req.plan;

        if (plan !== 'premium') {
            return res
                .status(403)
                .json({ success: false, message: 'This feature is only available for premium users.' });
        }

        const apiKey = process.env.STABILITY_API_KEY;
        if (!apiKey) {
            console.error("❌ Sunucuda STABILITY_API_KEY eksik.");
            return res
                .status(500)
                .json({ success: false, message: "Image generation service is not configured on the server." });
        }

        // DÜZELTME: Stability AI'ın yeni API'si JSON yerine FormData bekliyor.
        const formData = new FormData();
        formData.append('prompt', prompt);
        formData.append('output_format', 'png');
        formData.append('aspect_ratio', '1:1');

        // 🧠 Stability AI'a API isteği gönder (FormData ile)
        const response = await axios.post(
            "https://api.stability.ai/v2beta/stable-image/generate/core",
            formData, // JSON objesi yerine FormData gönderiliyor
            {
                headers: {
                    // Axios, FormData için 'Content-Type'ı otomatik olarak ayarlar
                    'Authorization': `Bearer ${apiKey}`,
                    'Accept': 'image/*' 
                },
                responseType: "arraybuffer",
            }
        );

        // 🖼️ Gelen ham veriyi Base64 formatına çevir
        const base64Image = `data:image/png;base64,${Buffer.from(response.data).toString("base64")}`;

        // ☁️ Base64 formatındaki resmi Cloudinary'e yükle
        const uploadResult = await cloudinary.uploader.upload(base64Image, {
            folder: "ai-generated-images",
        });
        
        const imageUrl = uploadResult.secure_url;

        // 💾 Cloudinary URL'sini veritabanına kaydet
        await sql`
            INSERT INTO creations (user_id, prompt, content, type, publish)
            VALUES (${userId}, ${prompt}, ${imageUrl}, 'image', ${publish ?? false})
        `;

        // ✅ Başarılı yanıtı ve resim URL'sini istemciye gönder
        res.json({ success: true, content: imageUrl });

    } catch (error) {
        // 🔍 Detaylı hata yönetimi
        if (error.response) {
            console.error("❌ Stability API Hatası:", error.response.status, Buffer.from(error.response.data).toString());
        } else {
            console.error("❌ Sunucu Hatası:", error.message);
        }
        res.status(500).json({
            success: false,
            message: "Failed to generate image. Please check server logs for details.",
        });
    }
};


export const removeImageBackground = async (req, res) => {
    try {
        const { userId } = req.auth();
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No image file uploaded." });
        }
        const imagePath = req.file.path;
        const plan = req.plan;

        if (plan !== 'premium') {
            
            fs.unlinkSync(imagePath);
            return res.status(403).json({ success: false, message: 'This feature is only available for premium users' });
        }

        
        const { secure_url } = await cloudinary.uploader.upload(imagePath, {
            effect: "background_removal"
        });

        
        if (!secure_url) {
            fs.unlinkSync(imagePath);
            return res.status(500).json({ success: false, message: "Cloudinary failed to process the image." });
        }

        await sql`INSERT INTO creations (user_id,prompt,content,type) VALUES (${userId},'Remove background from image',${secure_url},'image')`;
        
        
        fs.unlinkSync(imagePath);

        res.json({ success: true, content: secure_url });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: "Failed to remove background." });
    }
};

export const removeImageObject=async(req,res)=>{
    try {
        const {userId}=req.auth();
        const {object}=req.body;
        const image=req.file;
        const plan=req.plan;
        
        
        if(plan!=='premium' ){
            return res.json({success:false,message:'This feature is only available for premium users'})

        }
      
      
   const{public_id} =await cloudinary.uploader.upload(image.path)
   const imageUrl=  cloudinary.url(public_id,{
    transformation:[{effect:`gen_remove:${object}`}],
    resource_type:'image'
   })

    await sql `INSERT INTO creations (user_id,prompt,content,type) VALUES (${userId},${`Removed ${object} from image}`},${imageUrl},'image')`

    
    res.json({success:true,content:imageUrl})
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
}


export const resumeReview=async(req,res)=>{
    try {
        const {userId}=req.auth();
        const resume=req.file;
        const plan=req.plan;
        
        
        if(plan!=='premium' ){
            return res.json({success:false,message:'This feature is only available for premium users'})

        }
      
      
        if(resume.size>5*1024*1024){
            return res.json({success:false,message:'File size is too large'})
        
        }

        const dataBuffer=fs.readFileSync(resume.path)
        const pdfData=await pdf(dataBuffer)
        


        const prompt=`Review the following resume and provide constructive feedback on its strengths,weakness,and areas for improvement.
        Resume content:\n\n ${pdfData.text}`

           const response = await AI.chat.completions.create({
             model: "gemini-2.0-flash",
            messages: [
               {
                     role: "user",
                    content: prompt,
                },
    ],
    temperature:0.7,
    max_tokens:1000,
});
 const content =response.choices[0].message.content;


    await sql `INSERT INTO creations (user_id,prompt,content,type) VALUES (${userId},'Review the upload resume',${content},'resume-review')`

    
    res.json({success:true,content})
    } catch (error) {
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
}

