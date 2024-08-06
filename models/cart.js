const mongoose=require('mongoose')
const { type } = require('os')

const cartSchema=new mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"Product"},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    qyt:{type:Number,default:1}
})

const cartModel=mongoose.model("Product-cart",cartSchema)

module.exports=cartModel