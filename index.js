const express=require('express')

const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.json({msg:"Hello"})
})

app.listen(8090,()=>{
    console.log("Server Start...")
})