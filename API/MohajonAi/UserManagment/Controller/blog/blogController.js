const blogmodel = require("../../Model/blogModel");

const findPostsCreatedByUser = async (req, res) => {
  try {
    const createdBy = await req.userid;

    // Find posts created by the user
    const posts = await blogmodel.find({ createdBy });
    console.log(posts.length)
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        error: "An error occurred while fetching posts created by the user.",
      });
  }
};

module.exports = findPostsCreatedByUser;
