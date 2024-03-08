const mongoose = require('mongoose');

const roleSchema = new Schema({
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
      default : '5030'
    }],
    createAt: {
      type : Date ,
      required:true,
      default: Date.now
    }
  });

  
const Role = mongoose.model("Role", roleSchema);
module.exports = Role