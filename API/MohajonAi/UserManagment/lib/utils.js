const Organization = require('../Model/BMS/Organization.Model')

async function hasAdminPermission(organizationId, adminId) {
  try {
    // Find the organization
    const organization = await Organization.findById(organizationId).populate({
      path: 'roles',
      match: { user: adminId },
    }) // Filter roles for the admin

    if (!organization) {
      return false // Organization not found
    }
    // Check if the admin has an "Admin" role
    const adminRole = organization.roles.find(
      (role) => role.name === 'Admin' && role.user.toString() === adminId
    )

    // Check if the user is the organization's creator
    const isCreator = organization.creatorId.toString() === adminId

    // Return true if admin role is found or user is the creator
    return !!adminRole || isCreator
  } catch (error) {
    console.error(error)
    // Handle potential errors (e.g., database errors)
    console.log(error)
    return false // Consider returning false on error for safety
  }
}

module.exports = {
  hasAdminPermission,
}
