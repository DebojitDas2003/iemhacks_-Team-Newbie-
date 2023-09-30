const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 3000;


// Connect to MongoDB (replace 'mongodb://localhost/healthcare' with your MongoDB URL)
mongoose.connect('mongodb+srv://Debojit:raja1234@medaio.inpray3.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define the User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
  });
  
  // Create the User model
  const User = mongoose.model('User', userSchema);
// Implement user registration route
app.post('/register', async (req, res) => {
  try {
    // Create a new user document using the Mongoose User model
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10), // Hash the password
      // Add other user data fields as needed
    });

    // Save the user document to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
