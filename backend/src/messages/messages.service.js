const Message = require('./messages.model');

const createMessage = async(messageData) => {
    const message = new Message(messageData);
    await message.save();
    return message;
}

const listAllMessages = async(username, chatroomName) => {
    return await Message.find(username, chatroomName)
}




module.exports = { createMessage, listAllMessages }
