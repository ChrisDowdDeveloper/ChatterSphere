const Message = require('./messages.model');

const createMessage = async(messageData) => {
    const message = new Message(messageData);
    await message.save();
    return message;
}

const listAllMessages = async(username, chatroomName) => {
    return await Message.find(username, chatroomName)
}

const updateMessage = async (query, content) => {
    const updatedMessage = await Message.findOneAndUpdate(query, content, { new: true });
    if (!updatedMessage) {
        throw new Error('Message not found or update failed');
    }
    return updatedMessage;
}


module.exports = { createMessage, listAllMessages, updateMessage }
