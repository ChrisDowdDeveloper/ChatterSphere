import React, { useState, useEffect } from "react";
import { joinedChatrooms } from "../../service/api";

const JoinedChatrooms = ({ user }) => {
    const [chatrooms, setChatrooms] = useState([]);

    useEffect(() => {
        const fetchChatrooms = async() => {
            try {
                let data = await joinedChatrooms(user.username, user._id);
                setChatrooms(data);
            } catch(err) {
                console.error(err);
            }
        }

        fetchChatrooms();
    }, []);

    function availableChatrooms() {
        return (
            <ul>
                {chatrooms.map(chatroom => (
                    <li key={chatroom._id}>
                        {chatroom.chatroomName}
                        <button>Leave Chatroom</button>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            {chatrooms.length < 0 ? availableChatrooms() : <p>You are not apart of any chatrooms yet!</p>}
        </div>
    );
}

export default JoinedChatrooms;