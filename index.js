const express=require('express')
const database = require('./configs/db')
const router = require('./routers/router')

const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.listen(8090,()=>{
    console.log("Server Start...")
    database()
})