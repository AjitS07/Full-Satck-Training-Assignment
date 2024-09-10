const express = require("express");
const users = require("../user");

const router = express.Router();

router.get("/users",(req,res)=>{ // http://localhost:3000/api/users
    res.send({message : "User Fetched",data:users});

});
router.post("/Users",(req,res)=>{
    // http://localhost:3000/api/Users
   const data = req.body;
   const modifiedData = {id : users.length+1,...data};
   users.push(modifiedData);
//    users.push(data);
   res.send({message:"User Created",data: data});
    


});

router.put("/Users/:id",(req,res)=>{ // http://localhost:3000/api/Users
const{id} = req.params;
let user = users.find(item=>item.id === +id);

if(!user){
    return res.send({message:"User not found"})
}
user.contactDetails= req.body.contactDetails
res.send({message : "User Update",})

});

router.delete("/Users/:id",(req,res)=>{ // http://localhost:3000/api/deleteUsers
    const {id} = req.params;
    const index = users.findIndex(item => item.id === +id);
    
    if(index === -1){
        return res.send({message:"User not found"})
    }
    users.splice(index,1);
    res.send({message : "User Delete"})


});
module.exports = router;