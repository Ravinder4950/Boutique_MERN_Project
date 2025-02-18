const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    autoId:{type:Number,default:0},
    createdAt:{type:Date,default:Date.now()},
    status:{type:Boolean,defalut:true}
})
module.exports=mongoose.model('product',productSchema)