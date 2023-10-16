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
  members: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "member" },
      role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
    },
  ],
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'member', // Reference to the Member model for the user who created the Org
    required: true,
  },
});

const OrgSchema = mongoose.model("Organization", organizationSchema);

module.exports = organizationSchema;


/**
 * member purchese and create an account 
 * will be already part of a orgenazation
 * package type wull be determind 
 * authenticate member can create orgenzation 
 * 
 */
