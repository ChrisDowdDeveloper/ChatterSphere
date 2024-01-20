const express = require('express');
const userController = require('./users.controller');
const router = express.Router();

router.post('/create', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/:username', userController.getUser);
router.put('/:username', userController.updateUser);
router.delete('/:username', userController.deleteUser);

module.exports = router;