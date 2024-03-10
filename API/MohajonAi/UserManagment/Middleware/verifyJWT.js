const jwt = require('jsonwebtoken');


const verifyJWT = async (req, res, next) => {
    const token = req.headers.authorization || req.headers.Authorization;

    console.log(token)

    if (!token?.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized this shit from middlware' });
    }


    try {
        const decoded = await jwt.verify(token.split(' ')[1], process.env.ACCESS_TOKEN_SECRET_1);
        req.email = decoded.email;
        req.userid = decoded.userid;
        next();
    } catch (err) {
        console.error('Error verifying token:', err);
        return res.status(403).json({ error: 'Invalid token' });
    }
};

// const verifyJWT = async (req, res, next) => {
//   try {
//     const refreshToken = req.cookies.jwt;
//     const { email } = req.body;

//     console.log(refreshToken , email)

//     if (!refreshToken || !email) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_2);
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     if (user._id.toString() !== decoded.userid) {
//       return res.status(401).json({ message: "Invalid user" });
//     }

//     if (user.refreshToken !== refreshToken) {
//       return res.status(401).json({ message: "Invalid refresh token" });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }
// };


module.exports = verifyJWT;
