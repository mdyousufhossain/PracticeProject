const mongoose = require("mongoose");

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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true
  }],
  roles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Roles',
    required:true
  }],

  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true  
    }, 
    createAt: {
      type : Date ,
      required:true,
      default: Date.now
    }
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
