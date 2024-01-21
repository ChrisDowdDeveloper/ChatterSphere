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

const listAvailableChatrooms = async(userId) => {
    let chatrooms = await Chatroom.find({
        participants: { $nin: [userId] }
    });

    return chatrooms;
}

const listParticipants = async (chatroomName) => {
    const chatroom = await Chatroom.findOne({ chatroomName: chatroomName }).populate('participants');
    return chatroom ? chatroom.participants : [];
}

const deleteChatroom = async (chatroomName) => {
    return await Chatroom.findOneAndDelete({ chatroomName: chatroomName });
}

const listJoinedChatrooms = async(userId) => {
    const chatroom = await Chatroom.find({
        participants: userId
    });

    return chatroom;
}


module.exports = { getChatroomId, createChatroom, listChatrooms, listAvailableChatrooms, listParticipants, deleteChatroom, listJoinedChatrooms };
