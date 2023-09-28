const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user1', // Reference to the User model for the user who created the product
    required: true,
  },
  // You can add more fields as needed for your specific project
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;