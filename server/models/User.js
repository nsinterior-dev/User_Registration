const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String, 
    gender: {type: String, possibleValue:['Man', 'Woman']},
    email: String, 
    password: String,
    mobilenum: Number
});

module.exports = mongoose.model('users', userSchema);