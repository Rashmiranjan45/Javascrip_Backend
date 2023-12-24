// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Server started on port: ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("MongoDB connection failed :",err)
})

/*import express from 'express'

const app = express()

( async() =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(err)=>{
            console.log("ERROR:",err)
            throw err;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server started on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("ERROR",error)
        throw error
    }
})()*/
