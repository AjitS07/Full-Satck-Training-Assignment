const User = require("../model/user");
const bcrypt =require("bcrypt");


exports.signup = async (req, res , next)=>{
    try{
        const {name,email,password, phoneNumber}=req.body;
        const isExisting = await User.findOne({email : email});
        console.log(isExisting);
        if(isExisting) {
            const error = new Error("user already exist")
            error.name ="ExistingUserError";
            error.statusCode = 400;
            throw error;
        //    return res.status(400).send({message: "User already exists."});
        }

    //    const hashedPassword = await bcrypt.hash(password,10);

        
        const newUser = new User({name :name, email:email, password:password, phoneNumber:phoneNumber});
        console.log("hello");
        await newUser.save();
        res.status(201).send({message: "User registered successfully."});
    }
    catch(error){
        next(error);
        // if(error.name === "validationError"){
        //     const errors = Object.values(error.errors).map(error=>error.message);
        //      return res.status(400).json({message: "validation Errors",error:error});
        // }
        
        // res.status(500).json({message: error.message})
    }
}

exports.login = async (req,res,next)=>{
    try{
        const {email,password}=req.body;
        const isExisting = await User.findOne({email : email});
        if(!isExisting) {
            const error = new Error("User not found");
            error.statusCode =404;
            throw error;
            // return res.status(404).send({message: "User not found."});
        };
        const isMatched = await bcrypt.compare(password , isExisting.password);

        
        // const isMatched = password === isExisting.password;
        if(!isMatched) {
            const error = new Error("Invalid password");
            error.statusCode =401;
            throw error;
            // return res.status(401).send({message: "Invalid password."});
        }
        
        res.status(statusCode).send({message: "Invalid password.",data:isExisting});
        // res.send({message: "Login successful.",token:token});
    }
    catch(error){
        next(error);
        // res.status(500).json({message: error.message})
    }
}