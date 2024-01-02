const express = require('express');
const messageController = require('./messages.controller');
const router = express.Router();

router.post('/', messageController.createMessage);
router.get('/', messageController.listAllMessages);

module.exports = router;
