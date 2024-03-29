const mongoose = require("mongoose");
const brcypt = require("bcryptjs");

const userScema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "You must add name "],
    minLength: [2, "Thats not a name "],
    maxLength: [12, "Thats must be some nuclear password"],
  },
  // validating email
  email: {
    type: String,
    require: [true, "You must add Email"],
    unique: true,
    trim: true,
    //email regex ref : https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
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
  roles: {
    User: {
        type: Number,
        default: 2001
    },
    Editor: Number,
    Admin: Number
},
refreshToken: String
});

//encrypeting the pawssword before we saving db

userScema.pre("save", async function (next) {
  if(!this.isModified("password")){
    return next()

  }
  // encrypting the pass before submiting 
  const salt = await brcypt.genSalt(10);
  // hash password
  const hashedpass = await brcypt.hash(this.password, salt);
  this.password = hashedpass;
  next()
});

const User = mongoose.model("user", userScema);

module.exports = User;
