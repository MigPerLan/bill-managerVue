const moongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = moongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true

    },
    amount: {
        type: Number

    },
    savings: {
        type: Number
    },
    payPeriod: {
        type: String

    },
    bills: [{}]


});
UserSchema.statics.authenticate = function (email, password, cb) {
    User.findOne({ email: email })
        .exec(function (err, user) {
            if (err) {
                return cb(err)
            }
            else if (!user) {
                let err = new Error('User not found.');
                err.status = 401;
                return cb(err);
            }
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    return cb(null, user);
                }
                else {
                    return cb();
                }
            });
        });
}

UserSchema.pre('save', function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) { return next(err); }
        user.password = hash;
        next();
    })
});

const User = moongoose.model('User', UserSchema);

module.exports = User;