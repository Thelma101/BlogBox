const commentRoute = require('../controllers/commentController');
const app = require('express').Router();

app.post = ('/api/v1/comment', commentRoute.createComment);

module.exports = app;