const express = require('express');
const router = express.Router();
const User = require('./models/user');

router.post('/signup', async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const user = new User({
      name,
      email,
      phone,
      password,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

module.exports = router;
