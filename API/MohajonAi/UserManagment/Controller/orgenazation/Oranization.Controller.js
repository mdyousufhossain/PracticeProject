const { Mongoose } = require('mongoose')
const Role = require('../../Model/Role.Model')
const Organization = require('../../Model/organization.model')
const User = require('../../Model/user.model')
const { hasAdminPermission } = require('../../lib/utils')

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
  const { name, logo, moto, package, location } = req.body
  const userId = req.user.id // user._id ?

  //
  if (!name || !location) {
    return res
      .status(400)
      .json({
        error:
          'Please fill all required fields (name, package, location, business type)',
      })
  }

  // Check for existing organization with the same name
  const existingOrg = await Organization.findOne({ name })
  if (existingOrg) {
    return res.status(409).json({ error: 'Organization name already exists' })
  }

  try {
    const organization = new Organization({
      name,
      logo,
      moto,
      package,
      location,
      creatorId: userId,
    })

    // Create a role with admin permissions for the creator
    const role = new Role({
      name: 'Admin', // Assuming admin role name
      company: organization._id,
      user: userId,
      permissions: ['*'], // all permissions for admin
    })

    const session = await Mongoose.startSession()
    session.startTransaction()

    await organization.save({ session })
    await role.save({ session })

    await session.commitTransaction()

    await User.findByIdAndUpdate(userId, {
      $push: { orgenazation: organization._id },
    }) // giving the creator role

    res
      .status(201)
      .json({ message: 'Organization created successfully!', organization })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to create organization' })
  }
}

async function deleteOrganization(req, res) {
  const orgId = req.params._id
  const userId = req.userid // user data is available from middleware

  const isAdmin = await hasAdminPermission(orgId, userId)

  if (!isAdmin) {
    return res
      .status(403)
      .json({
        message: 'Unauthorized: You are not allowed to approve requests',
      })
  }
  try {
    // Check if the organization exists
    const organization = await Organization.findById(orgId)
    const session = await Mongoose.startSession()
    session.startTransaction()
    // Remove organization from member lists of associated users
    await User.updateMany(
      { orgenazation: organization._id },
      { $pull: { orgenazation: organization._id } }
    )
    await User.updateMany(
      {
        $or: [
          { _id: organization.creatorId },
          { 'roles.company': organization._id },
        ],
      },
      { $pull: { orgenazation: organization._id } }
    )
    // removeing the Roles related to this org
    await Role.deleteMany({ company: orgId }, { session })

    // Delete the organization
    await organization.deleteOne({ session })

    await session.commitTransaction()

    res.status(200).json({ message: 'Organization deleted successfully' })
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  createOrganization,
  deleteOrganization,
}
