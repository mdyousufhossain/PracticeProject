/**
 * 
 * @param { Object} req 
 * @param { Object} res 
 */

const registerUser =  (req,res) => {
    // email validation 
    if(!req.body.email){
        res.status(400)
        throw new Error("Please add an email")
    }
    // if success Register user succecced 
    res.send("Register User")
}

module.exports = registerUser