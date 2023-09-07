const userDB = {
    users:  require('../model/user.json'),
    setUser: function (data) {this.users = data}
}
const fsPromises = require('fs').promises
const path = require('path');

const bcryot = require('bcrypt')

const handleNewUser = async ( req, res ) => {
    const { user , pwd }= req.body;
    /** if user failed to provide access credential  */
    if(!user || !pwd ) return res.status(400).json({
        'message':'Username name Password are required'
    })

}