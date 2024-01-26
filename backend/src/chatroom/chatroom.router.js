const express = require('express');
const chatroomController = require('./chatroom.controller');
const router = express.Router();

router.post('/', chatroomController.createChatroom);
router.get('/', chatroomController.listChatrooms);

router.get('/:username', chatroomController.listAvailableChatrooms);

router.get('/:_id', chatroomController.listParticipants);
router.post('/:_id', chatroomController.joinChatroom);
router.delete('/:_id', chatroomController.deleteChatroom);

router.delete('/:_id/:userId', chatroomController.leaveChatroom);

router.get('/:userId/joined', chatroomController.listJoinedChatrooms);

module.exports = router;