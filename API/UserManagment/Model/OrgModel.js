const mongoose = require('mongoose')

const organizationSchema = new Schema({
    name: {
        type:String,
        required: true,
        maxLength:[16,"Name cant be this long"],
        minLength: [2, "Password is not strong enough"]
    },

    logo:{type:String},
    moto:{type:String},
    members: [
        {
          user: { type: Schema.Types.ObjectId, ref: 'User' },
          role: { type: Schema.Types.ObjectId, ref: 'Role' },
        },
      ],
      creatorId: String,
});



const OrgSchema = mongoose.model("Organization", organizationSchema);

module.exports = organizationSchema 
  