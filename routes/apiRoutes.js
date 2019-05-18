const controller = require('../controllers/apiController');

module.exports = app => {
    app.post('/user/', controller.newUser);
};
