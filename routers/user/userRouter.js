const {Router}=require('express')
const { signup, login } = require('../../controllers/user/userController')

const userRouter=Router()

userRouter.post("/signup",signup)
userRouter.post("/login",login)
userRouter.get("/home",(req,res)=>{
    res.json({msg:"hello Home"})
})

userRouter.get("/home2",(req,res)=>{
    res.json({msg:"hello Home2"})
})


module.exports=userRouter