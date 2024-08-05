const {Router}=require('express')
const userRouter = require('./user/userRouter')
const ProRouter = require('./product/productRouter')

const router=Router()
router.use("/user",userRouter)
router.use("/product",ProRouter)

module.exports=router