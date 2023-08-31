const User = require('../../models/user');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.redirect('/registration/success');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during registration.');
  }
};

