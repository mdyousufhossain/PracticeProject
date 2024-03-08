const asyncHandler = require('express-async-handler');
const User = require("../../Model/user.model");
const organization = require("../../Model/organization.model");
const Role = require("../../Model/Role.Model");

/**
 * ******strategy******
 * @todo only auth user can search for organization and have a joining request 
 * 
 */


const asyncHandler = require('express-async-handler');
const Organization = require("../../Model/organization.model");

async function searchOrganizations(req, res) {
  const { name, location } = req.query;
  const sort = req.query.sort || 'name'; // Default sort by name
  const order = req.query.order || 'asc'; // Default ascending order

  try {
    let query = {};

    if (name) {
      query.name = { $regex: new RegExp(name, 'i') }; // Case-insensitive search
    }

    if (location) {
      query.location = location;
    }

    const organizations = await organization.find(query)
      .sort({ [sort]: order === 'asc' ? 1 : -1 }); // Apply sorting

    res.status(200).json({ organizations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to search organizations' });
  }
}



async function joinRequest(req, res) {
  const { organizationId } = req.body;
  const userId = req.user.id;

  // Check if user already belongs to the organization
  const existingMembership = await Organization.findOne({
    _id: organizationId,
    members: { $in: [userId] },
  });
  if (existingMembership) {
    return res.status(400).json({ error: 'User already belongs to this organization' });
  }

  try {
    // Update organization to include a pending join request from the user
    await Organization.findByIdAndUpdate(organizationId, {
      $push: { joinRequests: userId },
    });

    res.status(200).json({ message: 'Join request sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send join request' });
  }
}

async function joinRequest(req, res) {
  const { organizationId } = req.body;
  const userId = req.user.id;

  // Check if user already belongs to the organization
  const existingMembership = await Organization.findOne({
    _id: organizationId,
    members: { $in: [userId] },
  });

  if (existingMembership) {
    return res.status(400).json({ error: 'User already belongs to this organization' });
  }

  try {
    // Update organization to include a pending join request from the user
    await Organization.findByIdAndUpdate(organizationId, {
      $push: { joinRequests: userId },
    });

    res.status(200).json({ message: 'Join request sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send join request' });
  }
}


async function getJoinRequests(req, res) {
  const organizationId = req.params.organizationId;

  try {
    const organization = await Organization.findById(organizationId)
      .populate({ path: 'joinRequests', select: 'name email' }); // Include user details

    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }

    res.status(200).json({ joinRequests: organization.joinRequests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get join requests' });
  }
}

async function hasAdminPermission(organizationId, adminId) {
  try {
    // Find the organization
    const organization = await Organization.findById(organizationId)
      .populate({ path: 'roles', match: { user: adminId } }); // Filter roles for the admin

    if (!organization) {
      return false; // Organization not found
    }
    // Check if the admin has an "Admin" role
    const adminRole = organization.roles.find((role) => role.name === 'Admin' && role.user.toString() === adminId);

    // Check if the user is the organization's creator
    const isCreator = organization.creatorId.toString() === adminId;

    // Return true if admin role is found or user is the creator
    return !!adminRole || isCreator;
  } catch (error) {
    console.error(error);
    // Handle potential errors (e.g., database errors)
    console.log(error)
    return false; // Consider returning false on error for safety
  }
}


async function approveJoinRequest(req, res) {
  const { organizationId, userId } = req.body;
  const adminId = req.user.id; // Assuming admin data is available from middleware

  // Check if admin has permission to approve requests
  const isAdmin = await hasAdminPermission(organizationId, adminId); // Implement function to check admin permission
  if (!isAdmin) {
    return res.status(403).json({ message: 'Unauthorized: You are not allowed to approve requests' });
  }

  try {
    // Find the organization
    const organization = await Organization.findById(organizationId)
      .populate('joinRequests'); // Include join requests

    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }

    // Check if user exists in join requests
    const userIndex = organization.joinRequests.findIndex((id) => id.toString() === userId);
    if (userIndex === -1) {
      return res.status(400).json({ message: 'User has not requested to join this organization' });
    }

    // Remove user from join requests
    organization.joinRequests.splice(userIndex, 1);

    // Add user as a member (default role: editor)
    organization.members.push(userId);

    // Assign default role (editor) to the user (optional)
    const defaultRole = await Role.findOne({ name: 'Editor', company: organizationId }); // Assuming default role setup
    if (defaultRole) {
      await User.findByIdAndUpdate(userId, { $addToSet: { roles: defaultRole._id } }); // Assign editor role
    }

    // Save the updated organization
    await organization.save();

    res.status(200).json({ message: 'Join request approved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to approve join request' });
  }
}


module.exports = {
  searchOrganizations,
  joinRequest,
  getJoinRequests,
  approveJoinRequest
}