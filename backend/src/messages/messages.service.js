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

const deleteMessage = async(messageId) => {
    const deletedMessage = await Message.findByIdAndDelete(messageId);
    if(!deletedMessage) {
        throw new Error('Message not found or delete failed');
    }
    return deletedMessage;
}

const listMessagesByChatroom = async(chatroomId) => {
    const messages = await Message.find({
        chatroomId: chatroomId
    })  
    console.log(messages);
    return messages;
}


module.exports = { createMessage, listAllMessages, listMessagesByChatroom, updateMessage, deleteMessage }
