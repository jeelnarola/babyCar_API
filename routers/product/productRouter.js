const {Router}=require('express')
const { productAddUser, productShow, ProductCart, cartShow } = require('../../controllers/product/productController')


const ProRouter=Router()

ProRouter.get("/",productShow)
ProRouter.post("/add",productAddUser)
ProRouter.post("/addToCart",ProductCart)
ProRouter.get("/showCart",cartShow)


module.exports=ProRouter