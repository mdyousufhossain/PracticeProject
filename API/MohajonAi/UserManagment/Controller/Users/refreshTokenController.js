require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../../Model/User.Model");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies.jwt) {
    return res.sendStatus(401);
  }

  const refreshToken = cookies.jwt;

  const UserToken = await User.findOne({ refreshToken });
  //console.log(UserToken)

  if (!UserToken) {
    return res.sendStatus(403);
  }

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET_2,
    (err, decoded) => {
      if (err || UserToken.email !== decoded.email) return res.sendStatus(403);
      const accessToken = jwt.sign(
        { userid : UserToken._id,
          email: UserToken.email
        },
        process.env.ACCESS_TOKEN_SECRET_1,
        { expiresIn: "15m" }
      );
      res.json({ accessToken });
    }
  );
};

module.exports = handleRefreshToken;
