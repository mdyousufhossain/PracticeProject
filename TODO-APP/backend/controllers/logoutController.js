
const Users = require('../model/userModel')



const LogOutHandler = async (req, res) => {
    // On client , also delete the accessToken

    const cookies = req.cookies ;

    if(!cookies?.jwt ) return res.sendStatus(204); // no cookies
    const refreashtoken =  cookies.jwt 

    const foundUser = await Users.findOne({
        refreashtoken
    })
    // Is refreshToken in db 
    if(!foundUser) {
        res.clearCookie('jwt', {
            httpOnly:true , sameSite:'None',
            secure:true })
        return res.sendStatus(204)
    }

    // Delete RefreshToken in db

    foundUser.refreashtoken = '';

    const result =  await foundUser.save();
    console.log(result)

    res.clearCookie('jwt' , { httpOnly:true , sameSite: 'None' , secure: true})

  };

  module.exports = { LogOutHandler }