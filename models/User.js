import mongoose, { Schema } from "mongoose";


const userSchema=new mongoose.Schema({
    _id:{ type:string,required:ture },
    name:{ type:string,required:ture },
    email:{type:string,required:ture, unique:ture },
    imgeUrl:{ type:string,required:ture },
    carItems:{type: Object, default: {} }
}, { minimize:false }) 

const User=mongoose.models.user || mongoose.models('user',userSchema)

export default user