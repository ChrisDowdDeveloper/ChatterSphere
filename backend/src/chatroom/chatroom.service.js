const Chatroom = require('./chatroom.model');

const getChatroomId = async(chatroomName) => {
    const chatroom = Chatroom(chatroomName);
    console.log(chatroom._id)
}

const createChatroom = async (chatroomData) => {
    const chatroom = new Chatroom(chatroomData);
    await chatroom.save();
    return chatroom;
};

const listChatrooms = async () => {
    return await Chatroom.find();
}

const listParticipants = async (chatroomName) => {
    const chatroom = await Chatroom.findOne({ chatroomName: chatroomName }).populate('participants');
    return chatroom ? chatroom.participants : [];
}

const deleteChatroom = async (chatroomName) => {
    return await Chatroom.findOneAndDelete({ chatroomName: chatroomName });
}


module.exports = { getChatroomId, createChatroom, listChatrooms, listParticipants, deleteChatroom };
