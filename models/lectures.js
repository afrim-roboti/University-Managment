const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  numberofClass: {
    type: Number,
    min: 1,
    max: 120
  }
});

module.exports = mongoose.model('lectures', lectureSchema);



