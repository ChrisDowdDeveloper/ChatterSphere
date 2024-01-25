import React, { useEffect, useState } from "react";
import { fetchAvailableChatrooms, joinAvailableChatroom } from "../../service/api";

const AvailableChatrooms = ({ user }) => {
    const [chatrooms, setChatrooms] = useState([]);

    useEffect(() => {
        const fetchChatrooms = async() => {
            if(user && user.username) {
                try {
                    let data = await fetchAvailableChatrooms(user);
                    let available = [];
                    data.forEach(chatroom => {
                        if(!chatroom.participants.includes(user._id)) {
                            available.push(chatroom);
                        }
                    })
                    setChatrooms(available);
                } catch(err) {
                    console.error(err);
                }
            }
        }

        fetchChatrooms();
    }, [user?.username]);

    const handleClick = async(chatroomId) => {
        try {
            await joinAvailableChatroom(chatroomId, user._id);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <ul>
                {chatrooms.map(chatroom => (
                    <li key={chatroom._id}>
                        <p>{chatroom.chatroomName}</p>
                        <p>Participants: {chatroom.participants}</p>
                        <button onClick={() => handleClick(chatroom._id)}>Join</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AvailableChatrooms;