require("dotenv").config();
const Userdb = require("../Model/UserModel");
const jwt = require("jsonwebtoken");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies.jwt) {
    return res.sendStatus(401);
  }

  const refreshToken = cookies.jwt;

  const UserToken = await Userdb.findOne({ refreshToken });
  //console.log(UserToken)

  
  if (!UserToken) {
    return res.sendStatus(403);
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET_2,
    (err, decoded) => {
      if (err || UserToken.email !== decoded.email) return res.sendStatus(403);
      const roles = Object.values(UserToken.roles);
      const accessToken = jwt.sign(
        {
          email: UserToken.email,
          roles: roles,
        },
        process.env.ACCESS_TOKEN_SECRET_1,
        { expiresIn: "15m" }
      );
      res.json({ roles, accessToken });
    }
  );
};

module.exports = handleRefreshToken;
