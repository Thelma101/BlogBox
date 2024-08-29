const commentSchema = require('../models/commentSchema');
const blogSchema = require('../models/blogSchema');

exports.createComment = async (req, res) => {
    const { comment } = req.body;
    if (!comment) {
        return res.status(404).send({ message: 'Field cannot be empty' })
    }
    const blogId = req.params.blogId;
    const blogExist = await blogSchema.findById(blogId);
    if (!blogExist) {
        return res.status(404).json({ message: 'Blog not found' });
    }
    try {
        const newComment = await commentSchema({
            comment,
            author: req.user._id,
            blog: blogId
        })
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
}

exports.getAllComments = async (req, res) => {
    try {
        const comments =  new Comment();
        res.json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
}