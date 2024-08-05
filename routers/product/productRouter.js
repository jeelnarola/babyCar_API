const {Router}=require('express')
const { productAddUser, productShow, ProductCart } = require('../../controllers/product/productController')


const ProRouter=Router()

ProRouter.get("/",productShow)
ProRouter.post("/add",productAddUser)
ProRouter.post("/addToCart",ProductCart)


module.exports=ProRouter