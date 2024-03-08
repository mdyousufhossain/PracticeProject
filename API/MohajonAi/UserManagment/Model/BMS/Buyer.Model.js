const mongoose = require('mongoose')

const buyerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  boughts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Reference to the User model for the user who created the product
    required: true,
  }],
  dues: {
    type: Number,
  },
  numberOfSale : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Memo', // Reference to the User model for the user who created the product
    required: true,
  }], 
  createdBy: {
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
    type: Date,
    required: true,
    default: Date.now,
  },
  // You can add more fields as needed for your specific project
})

const Buyer = mongoose.model('Buyer', buyerSchema)

module.exports = Buyer
