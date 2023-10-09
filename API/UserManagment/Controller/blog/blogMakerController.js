const Product = require("../../Model/blogModel");

const PostMaker = async (req, res) => {
  try {
    const { title, description } = req.body;

    const createdBy = req.userid;

    const post = await Product.create({
      title,
      description,
      createdBy,
    });

    
    console.log(post)
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the product.' });
  }
};


module.exports = PostMaker