import mongoose from 'mongoose';

const Model=new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    likeCount:{
        type:Number,
        default:0
    },
    files:String,
    creator:String,
    createdAt:{
        type:Date,
        default:new Date()
    },
})

const UserModel=mongoose.model("model",Model)
export default UserModel;