const mongoose = require("mongoose");

const memberScemadb = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [12, "Name cant be this long"],
    minLength: [2, "Name cant be this short"],
  },
  email: {
    type: String,
    required: true,
    // regex to match valid email
    // setting a unique att. to prevent having same email to multiple times
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please Add Valid Email",
    ],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "Password is not strong enough"],
  },
  photo: {
    type: String,
  },

  orgenazation: [
     {
      Orgid : String,
      Orgname: String,
      MemberRole: Number
    }
  ],
  // refresh token from the  jwt
  refreshToken: {
    type: String,
  },

  // Add loginAttempts field to track failed login attempts
  loginAttempts: {
    type: Number,
    default: 0,
  },

  // Add accountLockedUntil field to track lockout expiration time
  accountLockedUntil: {
    type: Date,
    default: null, // Indicates that the account is not locked
  },
});

const ScemaUserMemberdb = mongoose.model("member", memberScemadb);

module.exports = ScemaUserMemberdb;
