const Role = require("../../Model/Role.Model");
const organization = require("../../Model/organization.model");
const User = require("../../Model/user.model");
const asyncHandler = require('express-async-handler'); // for error handling



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



async function createOrganization(req, res) {

  const { name, logo, moto, package,location } = req.body;
  const userId = req.user.id; // user._id ? 

  // 
  if (!name || !location || !businessType) {
    return res
      .status(400)
      .json({ error: 'Please fill all required fields (name, package, location, business type)' });
  }

  // Check for existing organization with the same name
  const existingOrg = await organization.findOne({ name });
  if (existingOrg) {
    return res.status(409).json({ error: 'Organization name already exists' });
  }

  try {
    const organization = new organization({
      name,
      logo,
      moto,
      package,
      location,
      creatorId: userId
    });

    // Create a role with admin permissions for the creator
    const role = new Role({
      name: 'Admin', // Assuming admin role name
      company: organization._id,
      user: userId,
      permissions: ['*'], // all permissions for admin
    });

    const session = await mongoose.startSession();
    session.startTransaction();

    await organization.save({ session });
    await role.save({ session });

    await session.commitTransaction();

    await User.findByIdAndUpdate(userId, { $push: { orgenazation: organization._id } }); // giving the creator role

    res.status(201).json({ message: 'Organization created successfully!', organization });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create organization' });
  }
}

module.exports = asyncHandler(createOrganization);
