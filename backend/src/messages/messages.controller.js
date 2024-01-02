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

const updateMessage = async(req, res) => {
    try {
        const messageId = req.params;
        const content = { ...req.body };
        const updatedMessage = await messageService.updateMessage({ _id: messageId }, content);
        res.status(200).json(updatedMessage);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteMessage = async(req, res) => {
    try {
        const deletedMessage = await messageService.deleteMessage(req.params);
        res.status(200).json(deletedMessage);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = { createMessage, listAllMessages, updateMessage, deleteMessage };
