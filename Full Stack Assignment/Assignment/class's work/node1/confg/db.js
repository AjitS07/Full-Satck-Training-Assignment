const mongoose = require("mongoose");
const connectDb = ()=>{
    try{
    const connection = mongoose.connect("mongodb://localhost:27017/mongodb_user");
    console.log("Database connected");
}
catch (error){
    console.log(error);
}

}
module.exports = connectDb;