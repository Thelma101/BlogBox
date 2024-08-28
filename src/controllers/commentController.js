
exports.createComment = async (req, res) => {
    const { content, author, blog_id } = req.body;
    if (!content ||!author ||!blog_id ) {
        return res.status(404).json({ message: 'Please fill all the fields' })
    }

    try {
        const newComment = new commentSchema({
            content,
            author,
            blog_id
        });
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
}