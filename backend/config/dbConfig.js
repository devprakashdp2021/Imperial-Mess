const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
require("dotenv").config();

const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true,
}
var uri=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ldsdorm.mongodb.net/${process.env.MONGO_DATABASE}`
mongoose.connect(uri, connectionParams);
const connection = mongoose.connection;

connection.on("connected", ()=>{
    console.log("MongoDB connected successfully");
})

connection.on('error', (err)=>{
    console.log("MongoDB connection failed");
})