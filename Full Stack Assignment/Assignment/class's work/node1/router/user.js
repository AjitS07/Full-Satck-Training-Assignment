const express = require("express");
const users = require("../user");
const {getUser , createUser , updateUser ,deleteUser} = require("../controller/user");
const middleware = require("../middleware/middleware");
// const fs = require("fs");

const router = express.Router();

router.get("/users",middleware,getUser);

router.post("/users" ,createUser);
router.put("/users/:id",updateUser);
router.delete("/users/:id",deleteUser);


// router.get("/users",(req,res)=>{ // http://localhost:3000/api/users
//     res.send({message : "User Fetched",data:users});

// });
// router.post("/Users",(req,res)=>{
//     // http://localhost:3000/api/Users
//    const data = req.body;
//    const modifiedData = {id : users.length+1,...data};
//    users.push(modifiedData);
// //    users.push(data);
//    res.send({message:"User Created",data: data});
    


// });

// router.put("/Users/:id",(req,res)=>{ // http://localhost:3000/api/Users
// const{id} = req.params;
// let user = users.find(item=>item.id === +id);

// if(!user){
//     return res.send({message:"User not found"})
// }
// user.ContactDetails= req.body.ContactDetails
// res.send({message : "User Update",})

// });

// router.delete("/Users/:id",(req,res)=>{ // http://localhost:3000/api/deleteUsers
//     const {id} = req.params;
//     const index = users.findIndex(item => item.id === +id);
    
//     if(index === -1){
//         return res.send({message:"User not found"})
//     }
//     const delete_item= users.splice(index,1);
//     res.send({message : "User Delete",delete_item})





// });

module.exports = router;


// Model , view , controller
//index.js >> router >> controller >> 
