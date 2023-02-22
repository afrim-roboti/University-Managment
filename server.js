const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('./models/db');
const app = express();

const PORT = process.env.PORT || 5000;

// ketu jon te percaktume krejt paketat qe i perdorim
// dhe i specifikojme routse 
// dhe caktohet porti ku clienti i qaset portit permes permes proxys

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('cors')());
app.use(require('helmet')());
app.use('/api/students', require('./routes/students'));
app.use('/api/professors', require('./routes/professors'));
app.use('/api/departments', require('./routes/departments'));
app.use('/api/lectures', require('./routes/lectures'));
app.use('/api/users', require('./routes/users'));

// Production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`App running on port ${PORT}`)  );