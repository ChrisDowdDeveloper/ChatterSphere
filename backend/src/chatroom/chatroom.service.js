const Chatroom = require('./chatroom.model');

const getChatroomId = async(chatroomName) => {
    const chatroom = Chatroom(chatroomName);
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
    const chatrooms = await Chatroom.find({
        participants: userId
    });

    return chatrooms;
}

const addUser = async(chatroomId, userId) => {
    const chatroom = await Chatroom.findById(chatroomId);
    if(!chatroom.participants.includes(userId)) {
        chatroom.participants.push(userId);
        await chatroom.save();
        return chatroom;
    }
}


module.exports = { getChatroomId, createChatroom, listChatrooms, listAvailableChatrooms, listParticipants, deleteChatroom, listJoinedChatrooms, addUser };
