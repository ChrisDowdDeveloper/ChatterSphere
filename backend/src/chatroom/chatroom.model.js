const mongoose = require('mongoose');

const chatroomSchema = new mongoose.Schema({
    chatroomName: { type: String, required: true, unique: true },
    participants: [{ type: mongoose.Types.ObjectId, ref: "User", default: null }],
    createdAt: { type: Date, default: Date.now },
    lastActivity: { type: Date }
});

const Chatroom = mongoose.model('Chatroom', chatroomSchema);

module.exports = Chatroom;
