const express = require('express');
const messageController = require('./messages.controller');
const router = express.Router();

router.post('/', messageController.createMessage);
router.get('/', messageController.listAllMessages);
router.get('/:chatroomId', messageController.listMessagesByChatroom);
router.post('/:chatroomId', messageController.createMessageByChatroomId);
router.put('/:_id', messageController.updateMessage);
router.delete('/:_id', messageController.deleteMessage);

module.exports = router;
