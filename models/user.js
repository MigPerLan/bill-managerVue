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