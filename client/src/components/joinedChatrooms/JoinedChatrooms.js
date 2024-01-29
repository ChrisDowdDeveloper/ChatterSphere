import React, { useState, useEffect } from "react";
import { joinedChatrooms, leaveChatroom } from "../../service/api";
import { useNavigate } from 'react-router-dom';

const JoinedChatrooms = ({ user }) => {
    const [chatrooms, setChatrooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchChatrooms = async() => {
            if (user && user._id) { 
                try {
                    let data = await joinedChatrooms(user._id);
                    setChatrooms(data);
                } catch(err) {
                    console.error(err);
                }
            }
        }

        fetchChatrooms();
    }, [user?._id]);

    const handleClick = async(chatroomId, user) => {
        try {
            const response = await leaveChatroom(chatroomId, user._id);
            if(response === 200) {
                setChatrooms(prevChatrooms => prevChatrooms.filter(chatroom => chatroom._id !== chatroomId));
            }
        } catch (err) {
            console.error(err);
        }
    }

    function availableChatrooms(chatrooms) {
        return (
            <ul>
                {chatrooms.map(chatroom => (
                    <li key={chatroom._id}>
                        {chatroom.chatroomName}
                        <button onClick={() => handleClick(chatroom._id, user)}>Leave Chatroom</button>
                        <button onClick={() => navigate(`/${user.username}/${chatroom.chatroomName}`, { state: { chatroom, user } })}>View Messages</button>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            {chatrooms.length > 0 ? availableChatrooms(chatrooms) : <p>You are not apart of any chatrooms yet!</p>}
        </div>
    );
}

export default JoinedChatrooms;