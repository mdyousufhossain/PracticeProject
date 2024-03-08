const mongoose = require('mongoose')

const moneySchema = new mongoose.Schema({
  reasons: {
    type : String, 
    required: true,
  },
  Amounts : {
    type: Number,
    required: true,
  },
  issuedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for the user who created the product
    required: true,
  },
  
  ownedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization', // Reference to the User model for the user who created the product
    required: true,
  },
  createdAt: {
    type : Date ,
    required:true,
    default: Date.now
  }
  // You can add more fields as needed for your specific project
})

const Money = mongoose.model('Money', moneySchema)

module.exports = Money
