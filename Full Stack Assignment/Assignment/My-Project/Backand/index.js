const express = require("express");
const cors = require("cors");
const app = express();
const connectDB =require("./config/db");
const authRouters = require("./router/user");
const errorHandler =require("./middleware/gloalErrorHandler");


app. use(express.json());
app.use(cors());

connectDB();
app.use("/auth", authRouters);
app.use(errorHandler);

app.listen(3000,()=>{
    console.log("Server is running on 3000");
});