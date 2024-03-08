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
  location : { type:String},
  type : {type:'String'},
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true
  }],
  joinRequests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
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

const organization = mongoose.model("Organization", organizationSchema);

module.exports = organization;


/**
 * member purchese and create an account 
 * will be already part of a orgenazation
 * package type wull be determind 
 * authenticate member can create orgenzation 
 * 
 */
