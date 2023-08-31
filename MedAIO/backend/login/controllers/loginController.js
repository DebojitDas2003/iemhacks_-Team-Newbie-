const User = require('../../models/user');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.redirect('/login/success');
    } else {
      res.status(401).send('Invalid email or password.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during login.');
  }
};
