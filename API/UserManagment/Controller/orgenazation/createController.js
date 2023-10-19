const OrgSchema = require('../../Model/OrgModel');
const members = require('../../Model/memberModel')


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns // by name any org exist  
 * 
 * we will increase the validation of by unique name ,  
 * and we will add few more details like location and Business type 
 * if the validation pass then we let create the org .. 
 * 
 */


const creatingOrg = async (req, res) => {
    try {
      const { name, logo, moto, package, members } = req.body;
  
      const creatorId = req.email; // Make sure req.email 
      
      
      const firstMember = {
        email : creatorId,
        role : 5051
      }

      const newOrganization = await OrgSchema.create({
        name,
        logo,
        moto,
        package,
        "members" : firstMember,
        creatorId,
      });
  
      // Save the new organization to the database
      console.log(newOrganization);

      const memberemail = req.email
      const member_id = req.userid
      
      const ismemberExist = await members.findById(member_id)
      // duplocate members 
      if(!ismemberExist) {
          return res.status(401).json({ message : 'Please Register first'})
      }
  
      /*
       id : String,
       name: String,
       role: Number
      */
  
      const isDuplicateMember = org.members.find((member) => member.email === memberemail);
  
      if (isDuplicateMember) {
        return res.status(400).json({ message: 'You are already a member of this organization' });
      }

      const finalOrg = {
        'Orgid' : org._id,
        'Orgname':org.name,
        'MemberRole': firstMember['role']
      }
  
      ismemberExist.orgenazation = finalOrg // for beta version one user cannot be member of multiple org . 
      
      const result  = await ismemberExist.save()
      console.log(result) // 
      res.status(201).json({ success: true, data: newOrganization });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the organization.' });
    }
  };
  
  module.exports = creatingOrg;