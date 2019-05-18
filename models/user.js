const moongoose = require('mongoose');

const Schema = moongoose.Schema;

const UserSchema = new Schema({
    user: {
        type: String,
       
    },
    amount: {
        type: Number,
       
    },
    savings: {
        type: Number
    },
    payPeriod: {
        type: String,
   
    },
    bills: [{}]

});

const User = moongoose.model('User', UserSchema);

module.exports = User;