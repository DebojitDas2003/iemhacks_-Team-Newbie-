const express = require('express');
const mongoose = require('./db');
const registrationRoutes = require('./registration/routes');
const loginRoutes = require('./login/routes');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/registration', registrationRoutes);
app.use('/login', loginRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
