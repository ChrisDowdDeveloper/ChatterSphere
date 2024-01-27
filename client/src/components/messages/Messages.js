import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Messages = () => {
    let { username, chatroomName } = useParams();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async(chatroomName) => {
            const data = await fetchMessages(chatroomName);
            setMessages(data);
        }
    }, [chatroomName]);
    return (
        <div>
            Messages
        </div>
    )
}

export default Messages;