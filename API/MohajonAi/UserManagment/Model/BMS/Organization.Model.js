const mongoose = require('mongoose')

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxLength: [16, 'Name cant be this long'],
    minLength: [2, 'Name cant be this short'],
  },
  logo: { type: String },
  moto: { type: String },
  package: {
    type: String,
  },
  location: { type: String },
  type: { 
    type: String,
    default : 'Small Business'
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  ],
  joinRequests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Roles',
      required: true,
    },
  ],
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products :[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true 
  }],
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
})

const Organization = mongoose.model('Organization', organizationSchema)

module.exports = Organization

/**
 * member purchese and create an account
 * will be already part of a orgenazation
 * package type wull be determind
 * authenticate member can create orgenzation
 *
 */
