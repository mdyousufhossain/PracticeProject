// erro handler 

const errorHandler = (err,req,res,next) => {
     // Error handleing  
    const statusCode = res.statusCode ? res.statusCode : 500
     res.status(statusCode)

     res.json({
        message:err.message
     })
}