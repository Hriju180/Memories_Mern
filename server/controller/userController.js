import express from 'express';
import userModel from '../models/userModel.js'

export const getPosts=async(req,res)=>{
    try{
        const data=await userModel.find({})
        res.status(500).send(data);
    }catch(error){
         res.status(404).json({message:error})
    }
}

export const createPosts=async(req,res)=>{
     try{
       const data=req.body;
       const newModel=await userModel.create(data);
       res.json(newModel)
    }catch(error){
        res.status(404).json({message:error})
    }
}