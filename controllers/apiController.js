const db = require('../models/user');

module.exports = {
    newUser: (req, res) => {
        db.create(req.body)
            .then(user => {
                res.json(user);
            })
            .catch(err => {
                res.json(err);
            })
    },
    signUp: (req, res, next) => {
        if (req.body.password !== req.body.conPassword) {
            const err = new Error('passwords do not match.');
            err.status = 400;
            res.send('passwords dont match');
            return next(err);
        }
        if (req.body.email &&
            req.body.name &&
            req.body.password &&
            req.body.conPassword) {
            const userData = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            }
            db.create(userData, (error, user) => {
                if (error) {
                    return next(error);
                }
                else {
                    // req.session.userId = user._id;
                    return res.json({status: "Success", redirect: '/'})
                }
            })
        }
        else if (req.body.logEmail && req.body.logPass) {
            db.authenticate(req.body.logEmail, req.body.logPass, function (error, user) {
                if (error || !user) {
                    let err = new Error('Wrong email or password.');
                    err.status = 400;
                    return next(err);
                }
                else {
                    console.log('spu')
                    // req.session.userId = user._id
                    return res.json({status: "Success", redirect: '/home'})
                }
            });

        }
        else {
            let err = new Error('All fields required.');
            err.status = 400;
            return next(err);
        }

    },

    logout: (req, res, next) => {
        if (req.session) {
            req.session.destroy(err => {
                if (err) {
                    return next(err);
                }
                else {
                    return res.redirect('/login')
                }
            })
        }
    }


}