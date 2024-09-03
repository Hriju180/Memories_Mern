import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/userRouter.js';

const app=express();

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(cors());
app.use(express());

app.use('/',router);

const MONGO_URL="mongodb+srv://hrijubanerjee18:badHargrove18@cluster0.es33m6x.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";
const port=5000;

mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
})
.then(()=>{
app.listen(process.env.port||5000,()=>{
    console.log('server is lstening to ${port}`');
})
}).catch((error)=>{
    console.log(error);
});

