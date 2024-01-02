const messageService = require('./messages.service');

const createMessage = async(req, res) => {
    try {
        const username = req.params.username;
        const chatroomName = req.params.chatroomName;
        const messageData = { ...req.body, username, chatroomName };
        const message = await messageService.createMessage(messageData);
        res.status(201).json(message);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}

const listAllMessages = async(req, res) => {
    try {
        const username = req.params.username;
        const chatroomName = req.params.chatroomName;
        const messages = await messageService.listAllMessages(username, chatroomName);
        res.json(messages);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { createMessage, listAllMessages };
