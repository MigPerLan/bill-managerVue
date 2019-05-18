const moongoose = require('mongoose');

const Schema = moongoose.Schema;

const UserSchema = new Schema({
    user: {
        type: String,
        required : true
       
    },
    amount: {
        type: Number,
        required : true
       
    },
    savings: {
        type: Number
    },
    payPeriod: {
        type: String,
        required : true
   
    },
    bills: [{}]


});

const User = moongoose.model('User', UserSchema);

module.exports = User;