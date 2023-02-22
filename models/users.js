
const mongoose = require('mongoose');

//user schema 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true
      },
      email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true
      },
      password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true
      }
})

module.exports = mongoose.model('users', userSchema);




