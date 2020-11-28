const express = require('express');
const router = express.Router();

// Controllers
const userController = require('../controllers/user');

// Utils
const { username, password } = require('../utils/parameter.validator');

// Validation params
const validationsCreate = [username('username'), password('password')];

router.get('/', userController.detail);
router.post('/create', validationsCreate, userController.create);
router.patch('/:id/update', validationsCreate, userController.update);
router.delete('/:id/deactivate', userController.deactivate);

module.exports = router;
