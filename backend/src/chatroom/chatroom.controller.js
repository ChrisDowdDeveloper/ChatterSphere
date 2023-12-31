const chatroomService = require('./chatroom.service');

const createChatroom = async(req, res) => {
    try {
        const chatroom = await chatroomService.createChatroom(req.body);
        res.status(201).json(chatroom);
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

const listChatrooms = async (req, res) => {
    try {
        const chatrooms = await chatroomService.listChatrooms();
        res.json(chatrooms);
    } catch(e) {
        res.status(500).json({ message: e.message });
    };
};

const listParticipants = async(req, res) => {
    try {
        const chatroomParticipants = await chatroomService.listParticipants(req.query.chatroomName);
        res.json(chatroomParticipants);
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

const deleteChatroom = async(req, res) => {
    try {
        const deletedChatroom = await chatroomService.deleteChatroom(req.params.chatroomName);
        if (deletedChatroom) {
            res.status(200).json({ message: "Chatroom deleted successfully" });
        } else {
            res.status(404).json({ message: "Chatroom not found" });
        }
    } catch(e) {
        res.status(500).json({ message: e.message });
    };
};

module.exports = { 
    createChatroom, 
    listChatrooms, 
    listParticipants, 
    deleteChatroom,
};  
