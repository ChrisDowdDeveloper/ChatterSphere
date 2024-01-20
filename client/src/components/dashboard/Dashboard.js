import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserByUsername } from "../../service/api";
import JoinedChatrooms from "../joinedChatrooms/JoinedChatrooms";
import AvailableChatrooms from "../availableChatrooms/AvailableChatrooms"

const Dashboard = () => {
    const [user, setUser] = useState([]);
    let { username } = useParams();

    useEffect(() => {

        const fetchUserData = async() => {
            try {
                let data = await fetchUserByUsername(username);
                setUser(data);
            } catch (err) {
                console.error(err);
            }
        }

        if(username) {
            fetchUserData();
        }

    }, [username]);

    return (
        <div>
            {user && (
                <p>Welcome {user.username}</p>
            )}
            <h2>Joined Chatrooms</h2>
            <JoinedChatrooms user={user}/>
            <h2>Available Chatrooms</h2>
            <AvailableChatrooms user={user}/>
        </div>
    )
}

export default Dashboard;