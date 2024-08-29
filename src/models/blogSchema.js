const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    comment: {
        type: String,

    },
    author: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: 'Misc'
    }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;