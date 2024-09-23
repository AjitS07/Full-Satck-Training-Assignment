const router = require("../user")
const User = require("../model/user");


exports.getUser = async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).send ({message:"User Fetched",data : users});
    }catch(error){
        res.status(500).send (error);

    }
};
exports.createUser = async (req,res)=>{
    try{
        const { firstName, lastName , email , address , gender } = req.body;
        console.log(req.body)
        const existinUser = await User.findOne({email:email});
        if(existinUser){
            return res.status(400).send({message:"User already exists"})
        }
    
    const user = new User({ firstName, lastName, email, address, gender });
        await user.save();
    res.status(201).send({message:"User Created",data: user});
    }catch(error){
        res.status(500).send (error);

}
};
exports.updateUser = async (req,res)=>{
    try{
        const {id} = req.params;
       const existingUser = await User.findById(id);
       if(!existingUser){
        return res.status(400).send({message :"User not found"});

       }
       const UpadteUser =await User.findByIdAndUpadte(id , req.body,{new : true});
       res.status(202).send({message : "User Upadte",data :updateUser}); 
}
catch (error){
    res.status(500).send(error);
}
};
exports.deleteUser = async(req,res)=>{
    try{
        const {id} = req.params;
       const existingUser = await User.findById(id);
       if(!existingUser){
        return res.status(400).send({message :"User not found"});

       }
       const deleteUser =await User.findByIdAndDelete(id);
       res.status(200).send({message : "User Delete",data :deleteUser}); 
}
catch (error){
    res.status(500).send(error);
}

};
