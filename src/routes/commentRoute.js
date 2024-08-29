const comment = require('../controllers/commentController');
const app = require('express').Router();

app.post('/api/v1/:blogId/comment', comment.createComment);
app.get('/api/v1/comment', comment.getAllComments);

module.exports = app;