const express = require('express');
const chatroomController = require('./chatroom.controller');
const router = express.Router();

router.post('/', chatroomController.createChatroom);
router.get('/', chatroomController.listChatrooms);
router.get('/:username', chatroomController.listAvailableChatrooms);
router.get('/:chatroomName', chatroomController.listParticipants);
router.delete('/:chatroomName', chatroomController.deleteChatroom);

module.exports = router;