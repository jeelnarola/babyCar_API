const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    description:String
})

const productAdd=mongoose.model("Product",ProductSchema)

module.exports=productAdd