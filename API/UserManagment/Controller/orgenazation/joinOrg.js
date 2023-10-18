const OrgModel = require("../../Model/OrgModel");
const members = require("../../Model/memberModel")

const memberJoinOrg = async (req, res) => {
  try {
    const { id } = req.params;

    const org = await OrgModel.findById(id); // checking if there any matching org

    if (!org) // throw error if not org exist 
    return res.status(404).json({ message: `No item was found: ${id}` });
    console.log(`org found! ${org.name}`)

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

    const finalMember = {
        'id': member_id ,
        'name':ismemberExist.name,
        'email': memberemail,
        'role':4047
    }
  /*
    info : {
      Orgid : String,
      Orgname: String,
      MemberRole: Number
    }
  */
    const finalOrg = {
      'Orgid' : org._id,
      'Orgname':org.name,
      'MemberRole': finalMember['role']
    }

    ismemberExist.orgenazation = finalOrg
    
    const result  = await ismemberExist.save()
    console.log(result) // 
    await OrgModel.updateOne({ _id: org._id }, { $push: { members: finalMember } });
    res.status(200).json({success:'new member joined ',finalMember});
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = memberJoinOrg;
