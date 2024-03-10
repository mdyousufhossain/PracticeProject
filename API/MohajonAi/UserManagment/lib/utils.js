const Organization = require('../Model/BMS/Organization.Model')
const Role = require('../Model/Role.Model')

async function hasAdminPermission(organizationId, adminId) {
  try {
    // Check if the user is the organization's creator
    const isCreator = Organization.creatorId.toString() === adminId;

    const organization = await Organization.findById(organizationId).populate({
      path: 'roles',
      model: Role,
      match: { user: adminId },
    });

    if (!organization) {
      return false; // Organization not found
    }

    const adminRole = organization.roles.find(
      (role) => role.name === 'Admin' && role.user.toString() === adminId
    );

    // Return true if admin role is found or user is the creator
    return !!adminRole || isCreator; // Implement creator check if needed
  } catch (error) {
    console.error(error);
    // Handle potential errors here (e.g., database errors)
    return false; // Consider returning false on error for safety
  }
}


module.exports = {
  hasAdminPermission,
}
