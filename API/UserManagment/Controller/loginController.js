const Userdb = require('../Model/UserModel')
const bcrypt = require('bcryptjs')


const loginHandler = async (req , res)  => {
    const { email , password } = req.body;

    if(!email || password ) return  res.sendStatus(400).json({ message : "Please Add email or password"})

    const duplicate = Userdb.findOne({email})
    if(!duplicate) return res.sendStatus(401).json({message : "No register account Please create an account "})

    const match = bcrypt.compare(password, duplicate.password)

    if(email || password ) {
        
        res.json({'success':`User logged in ${duplicate.email} ${duplicate.name}`})
    } else {
        res.sendStatus(401)
    }



}

module.exports = loginHandler