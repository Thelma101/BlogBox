const blogBox = require('../controllers/blogController');
const app = require('express').Router();


app.post('/api/v1/blogs', blogBox.createBlog);
app.get('/api/v1/blogs', blogBox.getAllBlogs);
app.get('/api/v1/blogs:id', blogBox.getBlog);
// app.put('api/v1/:id', blogBox.updateBlogById);
// app.delete('api/v1/:id', blogBox.deleteBlogById);

module.exports = app;