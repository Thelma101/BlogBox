const blogBox = require('../controllers/blogController');
const app = require('express').Router();


app.post('/api/v1/blog', blogBox.createBlog);
app.get('/api/v1/blog', blogBox.getAllBlogs);
app.get('/api/v1/blog/:blogId', blogBox.getBlog);
// app.put('api/v1/:id', blogBox.updateBlogById);
// app.delete('api/v1/:id', blogBox.deleteBlogById);

module.exports = app;