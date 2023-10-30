const mongoose = require("mongoose");

/**
 * how do user will access the orgnezation ?
 * 
 * user login -> authenticator check if user is creator of any orgenzation if user own any  orgenzation , that org id should query into the    database . if found then then check orgenzation creaded by if he own it or not by checking user id ..  
 */






const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
    unique:true,
    maxLength: [16, "Name cant be this long"],
    minLength: [2, "Password is not strong enough"],
  },

  logo: { type: String },
  moto: { type: String },
  package:{
    type:String
  },
  members: [{
    id : String,
    name: String,
    email:String,
    role: Number

  }],
  creatorId: {},// gotta improve the validation 
});

const OrgSchema = mongoose.model("Organization", organizationSchema);

module.exports = OrgSchema;


/**
 * member purchese and create an account 
 * will be already part of a orgenazation
 * package type wull be determind 
 * authenticate member can create orgenzation 
 * 
 */
