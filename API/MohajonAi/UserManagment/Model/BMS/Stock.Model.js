const mongoose = require('mongoose')

const StockSchema = new mongoose.Schema({
  availble: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true 
  }],
  sold: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true 
  }],
  invested : {
    type : Number,
    required : true 
  },
  profit : {
    type : Number,
    required : true 
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

const Stock = mongoose.model('Stock', StockSchema)

module.exports = Stock
