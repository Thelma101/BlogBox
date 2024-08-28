const commentRoute = require('../controllers/commentController');
const app = require('express').Router();

app.post = ('/', commentRoute.createComment);