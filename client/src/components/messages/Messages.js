import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMessages } from "../../service/api";

const Messages = () => {
    const location = useLocation();
    const { chatroomName } = useParams();
    const [messages, setMessages] = useState([]);
    const chatroom = location.state?.chatroom;

    useEffect(() => {
        const fetchMessages = async() => {
            try {
                const data = await getMessages(chatroom._id);
                setMessages(data);
            } catch (err) {
                console.error(err);
            }
        }
        
        if(chatroom) {
            fetchMessages(chatroom._id);
        }
    }, [chatroomName]);

    return (
        <div>
            <ul>
                {messages.map(message => (
                    <li key={message._id}>{message.content}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default Messages;