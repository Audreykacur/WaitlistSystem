//create a schema in user.js 
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
});
const User = mongoose.model('User', UserSchema); //using that schema in your User model. All of your users will have the data in this format.

module.exports = User;