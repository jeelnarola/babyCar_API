const cartmodel = require("../../models/cart")
const productAdd = require("../../models/productModel")

const productAddUser=async(req,res)=>{
    try{
        let {image,name,price,description}=req.body
        let obj={
            image:image,
            name:name,
            price:price,
            description:description
        }

        let data=await productAdd.create(obj)
        res.status(200).json({msg:"Successfully Product Add."})

    }catch(err){
        console.log(err)
    }
}

const productShow=async(req,res)=>{
    try{
        let data=await productAdd.find()
        res.status(200).json({data:data})

    }catch(err){
        console.log(err)
    }
}

const ProductCart=async(req,res)=>{
    try{
        let {productId,userId}=req.body
        let data=await cartmodel.findOne({userId,productId})
        if(!data){
            let data=await cartmodel.create({userId,productId})
            res.status(200).json({msg:"add to cart"})
        }
        console.log(data)
        res.status(200).json({msg:"Ohk"})
    }catch(err){
        console.log(err)
    }
}

const cartShow=async(req,res)=>{

}

module.exports={productAddUser,productShow,ProductCart,cartShow}