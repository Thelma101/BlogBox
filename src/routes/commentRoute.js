const commentRoute = require('../controllers/commentController');
const app = require('express').Router();

app.post('/api/v1/comments', commentRoute.createComment);
app.get('/api/v1/comments', commentRoute.getAllComments);

module.exports = app;