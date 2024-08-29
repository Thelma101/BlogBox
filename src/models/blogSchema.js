const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,

    },
    author: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: 'Misc'
    },
    comments: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment' 
    }],
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;