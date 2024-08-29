const commentSchema = require('../models/commentSchema');
const Blog = require('../models/blogSchema');

exports.createComment = async (req, res) => {
    const { comment } = req.body;
    const blogId = req.params.blogId;
    console.log('Blog Id: ', blogId)
    if (!comment) {
        return res.status(400).send({ message: 'Field cannot be empty' })
    }

    try {
        const blogExist = await Blog.findById(blogId);
        if (!blogExist) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        const newComment = new Comment({
            comment,
            author: req.user._id,
            blog: blogId
        });

        const savedComment = await newComment.save();
        console.log('Comment saved:', savedComment);
        res.status(201).json(savedComment);
    } catch (error) {
        console.error('Error saving comment:', error.message, error.stack);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });

    }
}

exports.getAllComments = async (req, res) => {
    try {
        const comments = await commentSchema.find();
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message, error: error.stack });
    }
}