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
  photo: {
    type: String,
  },
  // organization is created or member of a 
  organizations: [{ type: Schema.Types.ObjectId, ref: "Organization" }],
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

const ScemaUser = mongoose.model("member", userScemadb);

module.exports = ScemaUser;
