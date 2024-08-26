const mongoose = require('mongoose');

const blogSchema = new blogBoxSchema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tag: {
        type: String,
    }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;