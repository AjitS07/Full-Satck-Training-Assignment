const express = require("express");

const app = express();
app.use(express.json());

const users = [
    {
        userName : "Rohan",
        email : "rohan@1006",
        contactDetails : "1233232323232"
    }
]

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.post("/create",(req,res)=>{
    const data = req.body;
   users.push(data);
    res.send({message : "User Created",data:data});
});
app.listen(3000,()=>{
    console.log("Server is running on 3000")
})