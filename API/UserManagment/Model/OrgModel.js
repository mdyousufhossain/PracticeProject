const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
  creatorId: {},
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
