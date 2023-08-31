const express = require('express');
const registrationAPI = require('./api');
const router = express.Router();

router.use('/registration', registrationAPI);

module.exports = router;
