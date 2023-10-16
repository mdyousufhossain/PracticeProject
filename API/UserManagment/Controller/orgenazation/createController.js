const OrgSchema = require('../../Model/OrgModel');


const creatingOrg = async (req, res) => {
    try {
      const { name, logo, moto, package, members } = req.body;
  
      const creatorId = req.userid; // Make sure req.userid is correctly set based on your authentication mechanism
  
      const newOrganization = await OrgSchema.create({
        name,
        logo,
        moto,
        package,
        members,
        creatorId,
      });
  
      // Save the new organization to the database
      console.log(newOrganization);
      res.status(201).json({ success: true, data: newOrganization });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the organization.' });
    }
  };
  
  module.exports = creatingOrg;