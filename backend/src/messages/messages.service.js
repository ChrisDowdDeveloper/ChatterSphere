const Message = require('./messages.model');

const createMessage = async(messageData) => {
    const message = new Message(messageData);
    await message.save();
    return message;
}



module.exports = { createMessage }
