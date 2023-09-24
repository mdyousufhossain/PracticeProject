const Userdb = require("../Model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .sendStatus(400)
      .json({ message: "Please Add email or password" });

  const duplicate = await Userdb.findOne({ email });
  if (!duplicate)
    return res
      .sendStatus(401)
      .json({ message: "No register account Please create an account " });

  const match = await bcrypt.compare(password, duplicate.password);

  if (match) {
    // access token for 15min 
    const accessToken = jwt.sign(
      { email: duplicate.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    const refreshToken = jwt.sign(
      { email: duplicate.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    duplicate.accessToken = refreshToken;
    const result = await duplicate.save();
    console.log(result)
    // saving cookie in only httpl cookie
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });
    await res.json({ success: `User logged in ${email} ${password}` });
    console.log("user loggen in :", email);
  } else {
    res.sendStatus(401);
  }
};

module.exports = loginHandler;
