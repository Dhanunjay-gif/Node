const express = require('express');
const dotenv = require('dotenv'); // Import dotenv
const {MongoClient} = require('mongodb')

dotenv.config(); 

MongoClient.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("MongoDb connected succesfully")
    })
    .catch((error)=>{
        console.log("Error",err)
    })

const app = express();

const port = process.env.PORT || 5000;  

app.get('/',(req,res)=>{
    res.send("Home")
})

app.listen(port, () => {
    console.log(`Server started and running successfully on port ${port}`);
});
