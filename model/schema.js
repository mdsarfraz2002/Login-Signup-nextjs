import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    lableStudioId:{
        type:Number,
        required:true,
        unique:true
    }


})

module.exports = mongoose.models.User || mongoose.model('User',userSchema)