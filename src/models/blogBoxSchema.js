const mongoose = require('mongoose');

const blogSchema = new blogSchema({
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

module.exports = mongoose.model('Blog', blogSchema);