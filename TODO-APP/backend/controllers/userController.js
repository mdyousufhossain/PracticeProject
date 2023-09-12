const User = require("../model/userModel");
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')

/**
 *
 * @param { Object} req
 * @param { Object} res
 */

const generateToken = (id) => {
  return jwt.sign({id},process.env.JWT_SECRET,{expiresIn: "1d"})
}




const registerUser = async (req, res) => {
  // new user creating
  try {
    const { name, email, password } = req.body;

    // validation
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please fill in all required fields");
    }
    if (password.length < 6) {
      throw new Error("At least 6 character is needed");
    }
    // check if user exist
    const userExist = await User.findOne({ email });
  // cat create account if you have already acocunt
    if (userExist) {
      res.status(400);
      throw new Error("This email already been register");
    }

    
    const user = await User.create({
      name,
      email,
      password ,
    });
    // gen jwt token 
    const token = generateToken(user._id)

    res.cookie('token',token , {
      path: "/",
      httpOnly:true,
      expires: new Date(Date.now() + 1000* 86400), // 1d
      sameSite : "none",
      secure: true
    })
    //checcing if suer exist in database
    if (user) {
      const { _id, name, email, photo, bio } = user;
      res.status(201).json({
        _id,
        name,
        email,
        photo,
        bio,
        token
      });
    }
  } 
  // error msg
  catch (error) {
    console.log(error)
    res.status(500).json({ msg: error.message });
  }
};


const LoginHandler = async ( req, res ) => {
  
  /*
  authenticate is real pain in ass but there is some demonstrate 
  
  first we will destruct some information from the db 
  then check if they exist if they do then we will check their access pass is correct if they have then we will give access 
  thats the plan 
  
  */
 
 try {
   const { email , password } = req.body
   const userExist = await User.findOne({ email })
   
   if(!userExist){ 
     res.status(400);
     throw new Error("There is no user goes by this email"); 
    }
    
    const correctPwd = await bcrypt.compare(password , userExist.password )
    
    if(!correctPwd) {
      res.status(400);
      throw new Error("Thats wrong pass , how about use your brain a little bit huh ? "); 
    }
    
    // generating user token id 
    const token = generateToken(userExist._id)
    
    res.cookie('token',token , {
      path: "/",
      httpOnly:true,
      expires: new Date(Date.now() + 1000* 86400), // 1d
      sameSite : "none",
      secure: true
    })
  /* finally checking if you are worthy of login  */
 
  if(correctPwd && userExist ) {
    const { _id, name, email, photo, bio } = userExist;
      res.status(200).json({
        _id,
        name,
        email,
        photo,
        bio,
        token
      });

  }
} 

catch (error) {
  console.log(error)
    res.status(500).json({ msg: error.message });
}

}



const gettingAllUsers = async (req, res) => {
  try {
    // extracing data from the database
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { registerUser , gettingAllUsers , LoginHandler };
 