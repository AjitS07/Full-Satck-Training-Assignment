const mongoose = require("mongoose");
const connectDB = async ()=>{
    try{
        const connection =await mongoose.connect("mongodb://127.0.0.1:27017/ProjectMain");
        console.log("Database is connected");

    } catch(error){
        console.log(error);

    }
}

module.exports = connectDB;