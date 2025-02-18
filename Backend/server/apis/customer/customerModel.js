const mongoose=require('mongoose')
const customerSchema=new mongoose.Schema({
    autoId:{type:Number,default:0},
    createdAt:{type:Date,default:Date.now()},
    status:{type:Boolean,default:true}
})

module.exports=mongoose.model('customer',customerSchema)