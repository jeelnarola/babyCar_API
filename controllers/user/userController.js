const bcrypt=require("bcrypt")
const UserSingup = require("../../models/userModel")
const signup=async(req,res)=>{
    try{
        let {username,email,password,role}=req.body
        let data = await UserSingup.findOne({email:email})
        console.log(data)
        if (data){
            res.status(200).json({msg:"already Account Extis"})
        }
        else{
            bcrypt.hash(password,5,async(err,done)=>{
                if(err){
                    console.log(err)
                }
                else{
                    let obj={username,email,password:done,role:role}
                    let data=await UserSingup.create(obj)
                    res.status(200).json({msg:"Signup SuccsessFull..",data:data})
                }
            })
        }
    }catch(err){
        console.log(err)
    }
}


const login=async(req,res)=>{
    try{
        let {email,password}=req.body
        let data=await UserSingup.findOne({email:email})
        // console.log(data)
        if (data){
            bcrypt.compare(password,data.password,(err,done)=>{
                if(err){
                    console.log(err)
                }
                if (done){
                    res.status(200).json({msg:"Login SuccsessFull...",data:data})
                }else{
                    res.status(200).json({msg:"Wrong Password"})
                }
            })
        }else{
            res.status(200).json({msg:"User Not Extis..."})
        }
    }catch(err){
        console.log(err)
    }
}

module.exports={signup,login}