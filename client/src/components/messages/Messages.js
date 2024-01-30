import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { deleteMessageById, getMessages,  sendMessage } from "../../service/api";

const Messages = () => {
    const location = useLocation();
    const { chatroomName } = useParams();
    const [messages, setMessages] = useState([]);
    const [chat, setChat] = useState("");
    const { chatroom, user } = location.state || {};

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

    const handleChange = (e) => {
        e.preventDefault();
        setChat(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = { "userId": user._id, "content": chat }
        try {
            await sendMessage(data, chatroom._id);
            setChat("");
            const updatedMessages = await getMessages(chatroom._id);
            setMessages(updatedMessages);
        } catch (err) {
            console.error(err);
        }
    }

    const deleteMessage = async(messageId) => {
        try {
            await deleteMessageById(messageId);
            const updatedMessages = await getMessages(chatroom._id);
            setMessages(updatedMessages);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <ul>
                {messages.map(message => (
                    <li key={message._id}>{message.content}
                    {message.senderId === user._id ? <button onClick={() => deleteMessage(message._id)}>Delete</button> : null}
                    </li>
                ))}
            </ul>
            <div>
                <textarea 
                    onChange={handleChange}
                    value={chat || ""}
                ></textarea>
                <button onClick={handleSubmit}>Send</button>
            </div>
        </div>
    )
}

export default Messages;