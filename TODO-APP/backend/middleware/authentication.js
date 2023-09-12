const User = require('../model/userModel')
const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const authCheker = async ( req , res, next) => {
    try {
        const token = req.cookies.token
        // checking if token exist or not 
        if(!token) {
            res.status(401)
            throw new Error("not authorized")
        }
        // checking if token is authorized or user is authorized exist or token exist 
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        const user  = await User.findById(verified.id).select('-password')
        // if user is not exist 
        if(!user) { throw new Error('user not found')}
        // assigned user to the req.user  
        req.user = user
        next()
    } catch (error) {
        
        res.status(401).json({msg : error.message })
    }
}

module.exports = authCheker