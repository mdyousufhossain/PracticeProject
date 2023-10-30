const mongoose = require('mongoose')

const roleSchema = new Schema({
    name: String,
    permissions: [String],
  });

  
const RoleSchema = mongoose.model("Role", roleSchema);
module.exports = roleSchema