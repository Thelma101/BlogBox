const blogSchema = require('../models/blogSchema');


exports.createBlog = async (req,res) => {
    const { title, content, author, tag } = req.body;
    if ( !title || !content || !author || !tag ) {
        return res.status(404).json({ message: 'Please fill all the fields' })
    }

    try {
        const newBlog = new blogSchema({
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
        const blogs = await blogSchema.find();
        res.json(blogs);
    } catch(error) {
        res.status(500).json({ message: error.message, error });
    }
  }

  exports.getBlog = async (req, res) => {
    try {
        const blog = await blogSchema.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
  }
//   exports.getBlog = async (req, res) => {
//     const blogId = req.params.blogId;

//     try {
//         const blog = await Blog.findById(blogId).populate('comments');
//         if (!blog) {
//             return res.status(404).json({ message: 'Blog not found' });
//         }

//         res.status(200).json(blog);
//     } catch (error) {
//         res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// };
