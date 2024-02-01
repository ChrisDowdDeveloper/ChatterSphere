import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from '../../service/api';

const CreateAccount = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let success = await createUser(userData);
            if(success) {
                navigate(`/${userData.username}/dashboard`)
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setUserData({
            ...userData, 
            [e.target.name]: e.target.value,
        })
    }



    return (
        <div>
            <form>
                <div>
                    <label>Desired Username</label>
                    <input 
                        name="username" 
                        type="text" 
                        value={userData.username || ""}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        name="password" 
                        type="text" 
                        value={userData.password || ""}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email Address</label>
                    <input 
                        name="email" 
                        type="text" 
                        value={userData.email || ""}
                        onChange={handleChange}    
                    />
                </div>
                <div>
                    <label>First Name</label>
                    <input 
                        name="firstName" 
                        type="text" 
                        value={userData.firstName || ""}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input  
                        name="lastName" 
                        type="text" 
                        value={userData.lastName || ""}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={() => navigate("/")}>Cancel</button>
            </form>
        </div>
    )
}

export default CreateAccount;