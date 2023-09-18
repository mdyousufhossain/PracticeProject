const jwt = require('jsonwebtoken');
const User = require('../model/userModel')


const handleRefreshToken = async ( req, res ) => {
    const cookies = req.cookies ;

    if(!cookies?.jwt ) return res.sendStatus(401);

    const refreashtoken = cookies.jwt ;

    const foundUser = await User.findOne({ refreashtoken })

    if(!foundUser) return res.sendStatus(403) // forbidden

    // accessing the jwt

    jwt.verify( refreashtoken , process.env.REFRESH_TOKEN_SECRET, (err , decoded ) => {

        if(err || foundUser.email !== decoded.email ) return res.sendStatus(403)

        const roles = Object.values(foundUser.roles)

        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "email":decoded.email,
                    "roles":roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '5m'}
        );

        res.json({ roles , accessToken })
    })
}

module.exports = { handleRefreshToken }