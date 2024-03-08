const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  rawPrice: {
    type: Number,
    required: true,
  },
  FinalPrice: {
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
    type: Date,
    required: true,
    default: Date.now,
  },
  // You can add more fields as needed for your specific project
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
