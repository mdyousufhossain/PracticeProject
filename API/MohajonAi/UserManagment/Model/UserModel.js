const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
    minLength: [6, "Password is not strong enough"],
  },
  password: {
    type: String,
    required: true,
  },
  // roles cannot be set in route gotta do it in database
  roles: {
    User: {
      type: Number,
      default: 2001,
    },
    Editor: Number,
    Admin: Number,
  },
  
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

const ScemaUser = mongoose.model("user1", userSchema);

module.exports = ScemaUser;
