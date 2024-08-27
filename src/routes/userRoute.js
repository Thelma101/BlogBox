const user = require('../controllers/userController');
const app = require('express').Router();


    app.post('/api/v1/user', user.createUser);
    app.get('/api/v1/user', user.getAllUsers);
    app.get('/api/v1/user/:id', user.getUser);
    app.put('/api/v1/user/:id', user.updateUser);
    app.delete('/api/v1/user', user.deleteUser);
    app.post('/api/v1/user/login', user.login);
    app.post('/api/v1/user/logout', user.logout);

module.exports = app;

