const mongoose = require('mongoose');

const commentSchema = new commentSchema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }
});