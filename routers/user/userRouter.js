const {Router}=require('express')

const userRouter=Router()

userRouter.get("/",(req,res)=>{
    res.json({msg:"Heelo Welcome"})
})


module.exports=userRouter