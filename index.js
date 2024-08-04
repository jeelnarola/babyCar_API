const express=require('express')
const cors=require("cors")
const database = require('./configs/db')
const router = require('./routers/router')

const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
// app.use(router)
app.get("/",(req,res)=>{
    res.json({msg:"hello"})
})

app.listen(8090,()=>{
    console.log("Server Start...")
    database()
})