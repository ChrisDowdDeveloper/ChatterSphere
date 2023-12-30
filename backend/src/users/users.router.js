const express = require('express');
const userController = require('./users.controller');
const router = express.Router();

router.post('/', userController.createUser);
router.get('/:username', userController.getUserByUsername);
router.put('/:username', userController.updateUser);
router.delete('/:username', userController.deleteUser);

module.exports = router;