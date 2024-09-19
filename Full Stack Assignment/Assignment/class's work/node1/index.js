const express = require("express");
const userRoutes = require("./router/user");
const productRoutes = require("./router/product");
const connectDb = require("./confg/db");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());
//app.use()
connectDb();
app.use("/api",userRoutes);
//app.use("/product",productRoutes);

// const users = [
//     {
//         userName : "Rohan",
//         email : "rohan@1006",
//         contactDetails : "1233232323232"
//     }
// ]

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// });

// app.post("/create",(req,res)=>{
//     const data = req.body;
//    users.push(data);
//     res.send({message : "User Created",data:data});
// });
// MVC --- model , view ,
app.listen(3000,()=>{
    console.log("Server is running on 3000");
});