const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
require("dotenv").config();
mongoose.connect(process.env.mongo_url);
const connection = mongoose.connection;

connection.on("connected", ()=>{
    console.log("MongoDB connected successfully");
})

connection.on('error', (err)=>{
    console.log("MongoDB connection failed");
})