import React from "react";
import { useState } from "react";
import { login } from "../../service/api";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        setForm({
            ...form, 
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let success = await login(form);
            if(success) {
                navigate(`/${form.username}/dashboard`)
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div>
                <img src="../icon/Chattersphere-logos_transparent.png"/>
            </div>
            <form>
                <div>
                    <label>Username</label>
                    <input 
                        name="username"
                        type="text"
                        value={form.username || ""}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        name="password"
                        type="password"
                        value={form.password || ""}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleSubmit}>
                    Login
                </button>
                <button onClick={() => navigate('/createAccount')}>
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default Login;