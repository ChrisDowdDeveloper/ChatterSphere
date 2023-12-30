const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    senderId: { type: mongoose.Types.ObjectId, ref: "User" },
    chatroomId: { type: mongoose.Types.ObjectId, ref: "Chatroom" },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    seenBy: [{ type: mongoose.Types.ObjectId, ref: "User" }]
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
