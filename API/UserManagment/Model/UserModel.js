const mongoose = require('mongoose');


const userScemadb = {
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required:true,
        minLength:[6,'Password is not strong enough']
        
    },
    password: {
        type:String,
        required:true

    },
    roles: {
        type:Number,
        default:2021
    },
    accessToken : String
}


const ScemaUser = mongoose.model('user1',userScemadb)

module.exports = ScemaUser

