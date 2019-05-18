const db = require('../models/user');

module.exports = {
    newUser: (req, res) =>{
        db.create(req.body)
        .then( user =>{
            res.json(user);
        })
        .catch( err =>{
            res.json(err);
        })
    }
}