const {Router}=require('express')
const { signup, login } = require('../../controllers/user/userController')

const userRouter=Router()

userRouter.post("/signup",signup)
userRouter.post("/login",login)
userRouter.get("/s",(req,res)=>{
    res.json({msg:"hello"})
})


module.exports=userRouter