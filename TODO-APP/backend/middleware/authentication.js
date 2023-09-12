const User = require('../model/userModel')
const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const protect = async ( req , res) => {
    try {
        const token = req.cookies.token
        if(!token) {
            res.status(401)
            throw new Error("not authorized")
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET)
        const user  = await User.findById(verified.id).select('-password')
    } catch (error) {
        
    }
}