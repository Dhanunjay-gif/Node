const express = require('express')
const dotenv = require('dotenv')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("MongoDb connected succesfully")
    })
    .catch((error)=>{
        console.log("Error",err)
    })

const app =express() 

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("Home")
})

app.listen(PORT,()=>{
    console.log(`Server started and running at ${PORT}`)
})