const mongoose = require('mongoose');
/**
 **Editor role** 
 *  create memo 
 *  add buyer 
 *  add product
 *  
 */
const roleSchema = new mongoose.Schema({
    name: String,
    company: {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Organization',
      required : true 
    },
    user :{
      type : mongoose.Schema.Types.ObjectId,
      ref : 'User',
      required : true 
    },
    permissions: [{
      type : String,
      default : '5030' // editor 
    }],
    createdAt: {
      type : Date ,
      required:true,
      default: Date.now
    }
  });

  
const Role = mongoose.model("Role", roleSchema);
module.exports = Role