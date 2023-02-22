const mongoose = require('mongoose');
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect('mongodb+srv://afrim:mongodb2022@cluster0.5bgxx5t.mongodb.net/university_managment?retryWrites=true&w=majority');
// Validation
mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));

  // Ketu bohet connection me databaze

