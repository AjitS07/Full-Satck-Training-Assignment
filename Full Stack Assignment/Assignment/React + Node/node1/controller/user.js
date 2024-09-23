//  const users = require("../user");
// const User = require("../model/user");


// exports.getUser = async (req,res)=>{
//     try{
//         const users = await User.find();
//         res.send ({message:"User Fetched",data : users});
//     }catch(error){
//         res.send (error);

//     }
// };
// exports.createUser = (req,res)=>{
//     const data = req.body;
//     const modifiedData = {id : users.length+1,...data};
//     users.push(modifiedData);
//  //    users.push(data);
//     res.send({message:"User Created",data: data});
// };
// exports.updateUser = (req,res)=>{
//     const{id} = req.params;
//     let user = users.find(item=>item.id === +id);
    
//     if(!user){
//         return res.send({message:"User not found"})
//     }
//     user.ContactDetails= req.body.ContactDetails
//     res.send({message : "User Update",})
// };
// exports.deleteUser = (req,res)=>{
//     const {id} = req.params;
//     const index = users.findIndex(item => item.id === +id);
    
//     if(index === -1){
//         return res.send({message:"User not found"})
//     }
//     const delete_item= users.splice(index,1);
//     res.send({message : "User Delete",delete_item})

// };
