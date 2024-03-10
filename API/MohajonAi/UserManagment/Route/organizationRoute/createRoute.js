const express = require('express')
const router = express.Router()
const {
  createOrganization,
} = require('../../Controller/Orgenazation/Oranization.Controller')
const verifyJWT = require('../../Middleware/verifyJWT');




router.get("/createOrg", (req, res) => {
    res.render("createOrg");
  });

router.post('/createOrg', verifyJWT , createOrganization)

module.exports = router