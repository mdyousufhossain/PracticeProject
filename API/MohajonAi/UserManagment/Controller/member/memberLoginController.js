const memberdb = require('../../Model/memberModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//const generateTokensAndSetCookies = require('../config/tokengenerator')
require('dotenv').config()

const memberLoginHandler = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password)
  return res.status(400).json({ message: 'Please Add email or password' })

const duplicate = await memberdb.findOne({ email })

if (!duplicate)
return res
.status(401)
.json({ message: 'No register account Please create an account ' })

console.log(req.body)
  // extra layer of defend checking if this account already tried multiple times
  if (
    duplicate.accountLockedUntil &&
    duplicate.accountLockedUntil > new Date()
    ) {
    return res.status(401).json({
      message:
        'Account locked. Too many failed login attempts. Try again later.',
    })
  }
  
  // comparing password
  const match = await bcrypt.compare(password, duplicate.password)
  
  if(!match) {
    return res.status(400).json({ message: 'Check email or password there must be something wrong' })
  }

  if (match) {

      duplicate.loginAttempts = 0;
      duplicate.accountLockedUntil = null; // Reset account lockout
      await duplicate.save();
      
      const accessToken = jwt.sign(
        {
        userid: duplicate._id,
        email: duplicate.email,
      },
      process.env.ACCESS_TOKEN_SECRET_1,
      { expiresIn: '15m' }
    )

    // Generate refresh token
    const refreshToken = jwt.sign(
      {
        userid: duplicate._id,
        email: duplicate.email,
      },
      process.env.REFRESH_TOKEN_SECRET_2,
      { expiresIn: '1d' }
    )

    // Save the refresh token in the database note duplicate is the user line : 14 for reference
    duplicate.refreshToken = refreshToken
    await duplicate.save()

    // Set cookies in the response ___
    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      //sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
      //secure: true, // Uncomment this line if you are using HTTPS in production
    })
    
    res.json({
      email,
      accessToken,
      success: `User logged in ${email}`,
    });

  } else {
    // Increment login attempts on each failed attempt
    duplicate.loginAttempts++;
    await duplicate.save();

    if (duplicate.loginAttempts >= 5) {
      // Lock the account for 15 minutes
      duplicate.accountLockedUntil = new Date(Date.now() + 1 * 60 * 1000) // should be at least 15 in prod
      await duplicate.save()

      return res.status(401).json({
        message:
          'Account locked. Too many failed login attempts. Try again later.',
      })
    }

    // Handle unsuccessful login attempts
  }
}

module.exports = memberLoginHandler
