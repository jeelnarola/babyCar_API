const express=require('express')
const cors=require("cors")
const database = require('./configs/db')
const router = require('./routers/router')
const proRouter = require('./routers/product/productRouter')
require('dotenv').config()

const corsConfig={
    origin:"*",
    credential:true,
    method:["GET","POST","PATCH","PUT","DELETE"]
}


const app=express()


app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.options("",cors(corsConfig))
app.use(cors(corsConfig))

app.use(proRouter)
app.use(router)

app.listen(process.env.PORT,()=>{
    console.log("Server Start...")
    database()
})