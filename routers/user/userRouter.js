const {Router}=require('express')
const { signup, login } = require('../../controllers/user/userController')

const userRouter=Router()

userRouter.post("/signup",signup)
userRouter.post("/login",login)
userRouter.get("/signup",(req,res)=>{
    res.send({msg:"hello"})
})


module.exports=userRouter