const mongoose = require('mongoose'); 
// monoogse e marrim si paket

// permes instances moongose schema krijohet tabela departments
// duke i specifiku emrat e kolones qfar gjatesie ka 
const departmentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  numberofClass:{
    type: Number,
    min: 1,
    max: 120
  },
  numberofProffesors:{
    type: Number,
    min: 1,
    max: 120
  },
  numberofStudents:{
    type: Number,
    min: 1,
    max: 120
  }
});

module.exports = mongoose.model('departments', departmentsSchema);



