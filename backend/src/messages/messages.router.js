const express = require('express');
const messageController = require('./messages.controller');
const router = express.Router();

router.post('/', messageController.createMessage);

module.exports = router;
