const user = require('../controllers/userController')

module.exports = (app) => {
    app.post('/user', user.create)
    app.get('/user', user.getAll)
    app.get('/user/:id', user.getById)
    app.put('/user/:id', user.update)
    app.delete('/user/:id', user.delete)
    app.post('/user/login', user.login)
    app.post('/user/logout', user.logout)
}