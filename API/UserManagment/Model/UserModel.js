const mongoose = require("mongoose");

const userScemadb = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minLength: [6, "Password is not strong enough"],
  },
  password: {
    type: String,
    required: true,
  },
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

const ScemaUser = mongoose.model("user1", userScemadb);

module.exports = ScemaUser;
