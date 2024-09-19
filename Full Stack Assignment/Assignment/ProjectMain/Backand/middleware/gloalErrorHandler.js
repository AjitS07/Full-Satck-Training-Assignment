const errorHandler = (err,req,res ,next)=>{
    let statusCode =err.statusCode || 500;
    let errorMessage =err.message || "Internal Server error"
    if(err.name === "ValidationError"){
       const error = Object.value(err.error).map(error=>error.message);
       statusCode = 400;
        errorMessage = errors;
    }
    res.status(statusCode).send({status :"fail" ,message :errorMessage});
    
}
module.exports = errorHandler;