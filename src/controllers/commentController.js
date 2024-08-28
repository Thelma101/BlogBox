
exports.createComment = async (req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(404).send({ message: 'Field cannot be empty' })
    }
    try {
        
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
}