import React from "react";

const ExistingUser = ({ handleChange, handleSubmit, form }) => {
    return (
        <div>
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
            </form>
        </div>
    )
}

export default ExistingUser;