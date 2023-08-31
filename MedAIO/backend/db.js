const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Debojit:raja1234@medaio.inpray3.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
