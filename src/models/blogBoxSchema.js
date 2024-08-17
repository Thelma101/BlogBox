const mongoose = require('mongoose');

export default mongoose;

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: String,
  date: { type: Date, default: Date.now },
});

const BlogBox = mongoose.model('BlogBox', postSchema);

