const express = require('express');
const router = express.Router();

// Controllers
const loginController = require('../controllers/user');

// Utils
const {username, password} = require('../utils/parameter.validator');

// Validation params
const validations = [
  username('username'),
  password('password'),
];

router.post('/login', validations, loginController.sum);

module.exports = router;
