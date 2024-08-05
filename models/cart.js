const mongoose=require('mongoose')
const { type } = require('os')

const cartSchema=new mongoose.Schema({
    productId:{type:mongoose.Schema.Types.ObjectId,ref:"Product-List"},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    qyt:{type:Number,default:1}
})

const cartmodel=mongoose.model("Product-cart",cartSchema)

module.exports=cartmodel