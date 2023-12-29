const userService = require('./users.service');

const createUser = async(req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

const getUserByUsername = async (req, res) => {
    try {
        const user = await userService.findUserByUsername(req.params.username);
        if(!user) {
            return res.status(404).json({ message: 'User not found' });        
        }
        res.json(user);
    } catch(e) {
        res.status(500).json({ message: e.message });
    };
};

const updateUser = async(req, res) => {
    try {
        const query = { username: req.params.username }
        const updatedUser = await userService.updateUser(query, req.body);
        res.status(201).json(updatedUser);
    } catch(err) {
        res.status(500).json({ message: err.message });
    };
};

const deleteUser = async(req, res) => {
    try {
        const user = await userService.deleteUser(req.params.username);
        res.status(200).json({ user });
    } catch(e) {
        res.status(500).json({ message: e.message });
    };
};

module.exports = { createUser, getUserByUsername, updateUser, deleteUser };  
