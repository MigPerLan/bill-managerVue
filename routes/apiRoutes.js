const controller = require('../controllers/apiController');

module.exports = app => {
    app.post('/user/', controller.newUser);
    app.post('/signUp/', controller.signUp);
};
