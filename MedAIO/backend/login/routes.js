const express = require('express');
const loginAPI = require('./api');
const router = express.Router();

router.use('/login', loginAPI);

module.exports = router;
