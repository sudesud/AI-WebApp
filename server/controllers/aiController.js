import { OpenAI } from 'openai'
import sql from '../configs/db.js';
import { clerkClient } from '@clerk/express';
import axios from 'axios';
import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');



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

    // 🔒 Premium kontrolü
    if (plan !== 'premium') {
      return res
        .status(403)
        .json({ success: false, message: 'This feature is only available for premium users.' });
    }

    // 🔑 API anahtarı kontrolü
    const apiKey = process.env.STABILITY_API_KEY;
    if (!apiKey) {
      console.error("❌ Missing Stability API Key");
      return res
        .status(500)
        .json({ success: false, message: "Stability AI API key not configured on server." });
    }

    // 🧠 Stability AI isteği (Yeni API endpoint)
    const response = await axios.post(
      "https://api.stability.ai/v2beta/stable-image/generate/core",
      {
        prompt,
        output_format: "png",
        aspect_ratio: "1:1"
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        responseType: "arraybuffer", // Görsel binary olarak gelir
      }
    );

    // 🖼️ Base64 formatına dönüştür
    const base64Image = `data:image/png;base64,${Buffer.from(response.data).toString("base64")}`;

    // ☁️ Cloudinary'e yükle
    const uploadResult = await cloudinary.uploader.upload(base64Image, {
      folder: "ai-images",
      resource_type: "image",
    });

    const imageUrl = uploadResult.secure_url;

    // 💾 Veritabanına kaydet
    await sql`
      INSERT INTO creations (user_id, prompt, content, type, publish)
      VALUES (${userId}, ${prompt}, ${imageUrl}, 'image', ${publish ?? false})
    `;

    // ✅ Başarılı yanıt
    res.json({ success: true, content: imageUrl });

  } catch (error) {
    // 🔍 Hata ayıklama
    if (error.response) {
      console.error("❌ Stability API Error:", error.response.status, error.response.data);
    } else {
      console.error("❌ Server Error:", error.message);
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
            // Geçici dosyayı sil ve sonra yanıt ver
            fs.unlinkSync(imagePath);
            return res.status(403).json({ success: false, message: 'This feature is only available for premium users' });
        }

        // DÜZELTME: Cloudinary'ye gönderilen parametreler basitleştirildi ve düzeltildi.
        const { secure_url } = await cloudinary.uploader.upload(imagePath, {
            effect: "background_removal"
        });

        // Hata kontrolü: secure_url alınamazsa
        if (!secure_url) {
            fs.unlinkSync(imagePath);
            return res.status(500).json({ success: false, message: "Cloudinary failed to process the image." });
        }

        await sql`INSERT INTO creations (user_id,prompt,content,type) VALUES (${userId},'Remove background from image',${secure_url},'image')`;
        
        // Geçici dosyayı sil
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
        const {image}=req.file;
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

