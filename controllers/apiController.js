const db = require('../models/user');

const express = require('express');

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
                    req.session.userId = user._id;
                    return res.json(userData);
                }
            })
        }

    }


}