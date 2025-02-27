const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    autoId:{type:Number,default:0},
    name:{type:String,defalut:''},
     description:{type:String,default:''},
     image:{type:String,default:''}, 
     price:{type:Number,defalut:0},
     categoryId:{type:mongoose.Schema.Types.ObjectId,ref:'category',defalut:null},                 
    createdAt:{type:Date,default:Date.now()},
    status:{type:Boolean,defalut:true}
})
module.exports=mongoose.model('product',productSchema)