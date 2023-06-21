const mongoose = require("mongoose");
const brcypt = require("bcryptjs");

const userScema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "You must add name "],
    minLength: [2, "Thats not a name "],
    maxLength: [12, "Thats must be some nuclear password"],
  },
  email: {
    type: String,
    require: [true, "You must add Email"],
    unique: true,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please Add Valid Email",
    ],
  },
  password: {
    type: String,
    required: [true, "add more password"],
    minLength: [6, "not enough strong"],
    // maxLength:[30,"Are you trying some nuclear password?"]
  },
  photo: {
    type: String,
  },
  bio: {
    type: String,
    maxLength: [250, "Bio must not be more than 250 character"],
    default: "a night without sleep is worse than death",
  },
});

// encrypeting the pawssword before we saving db

userScema.pre("save", async function (next) {
  if(!this.isModified("password")){
    return next()

  }

  const salt = await brcypt.genSalt(10);
  // hash password
  const hashedpass = await brcypt.hash(this.password, salt);
  this.password = hashedpass;
  next()
});

const User = mongoose.model("user", userScema);

module.exports = User;
