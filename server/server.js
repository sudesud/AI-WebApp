import express from 'express'
import cors from 'cors'
import 'dotenv/config';

const app =express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>res.send('Server is live !'))

const PORT =process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('server is running on port' + PORT)
})