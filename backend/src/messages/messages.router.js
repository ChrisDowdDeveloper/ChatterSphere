const express = require('express');
const messageController = require('./messages.controller');
const router = express.Router();

router.post('/', messageController.createMessage);
router.get('/', messageController.listAllMessages);
router.get('/:chatroomName')
router.put('/:_id', messageController.updateMessage);
router.delete('/:_id', messageController.deleteMessage);

module.exports = router;
