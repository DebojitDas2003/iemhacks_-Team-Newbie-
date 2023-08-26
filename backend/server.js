const express = require('express');
const mongoose = require('mongoose');
const app = express();
// Middleware setup (body parsing, CORS, etc.)
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Start the server
const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
