const mongoose = require('mongoose')

const memoSchema = new mongoose.Schema({
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Buyer', // Reference to the User model for the user who created the product
    required: true,
  },
  products:  [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  }],

  totalAmounts : {
    type: Number,
    required: true,
  },
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
    type : Date ,
    required:true,
    default: Date.now
  }
  // You can add more fields as needed for your specific project
})

const Memo = mongoose.model('Memo', memoSchema)

module.exports = Memo
