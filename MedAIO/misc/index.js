const express = require('express');
const db = require('./db');
const loginApi = require('./login/api');
const registrationApi = require('./registration/api');
const app = express();

app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
