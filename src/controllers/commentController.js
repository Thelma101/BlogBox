
exports.createComment = async (req, res) => {
    const { comment } = req.body;
    if (!comment) {
        return res.status(404).send({ message: 'Field cannot be empty' })
    }
    try {
        const newComment = await commentSchema({
            comment,
            author: req.user._id,
            blog_post: req.params.blogId
        })
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
}

