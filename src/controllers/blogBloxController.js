const blogSchema = require('../models/blogBoxSchema');


exports.createBlog = async (req,res) => {
    const { title, content, author, tag } = req.body;
    if ( !title || !content || !author || !tag ) {
        return res.status(404).json({ message: 'Please fill all the fields' })
    }

    try {
        const newBlog = new Blog({
            title,
            content,
            author,
            tag
        })
        const blog = await newBlog.save();
        res.status(201).json({ message: 'New post added successfully', blog });
    }
    catch (error) {
        res.status(500).json({ message: error.message, error});
    }
}

exports.getAllBlogs = async (req, res) => { 
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch(error) {
        res.status(500).json({ message: error.message, error });
    }
  }