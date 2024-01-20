import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserByUsername } from "../../service/api";

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
        </div>
    )
}

export default Dashboard;