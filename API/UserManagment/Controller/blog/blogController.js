const Product = require("../../Model/blogModel");



const findPostsCreatedByUser = async (req, res) => {
    try {
      const createdBy = req.userid; 
  
      // Find posts created by the user
      const posts = await Product.find();
  
      res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching posts created by the user.' });
    }
  };


  module.exports = findPostsCreatedByUser;
  