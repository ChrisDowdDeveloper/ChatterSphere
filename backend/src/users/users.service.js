const User = require('./users.model');

const createUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
};

const read = async(username) => {
    return await User.findOne({ username });
}

const readEmail = async(email) => {
    return await User.findOne({ email });
}

const readPassword = async(username) => {
    return await User.findOne({ username });
}

const updateUser = async(username, userData) => {
    return await User.findOneAndUpdate(username, userData, { new: true });
}

const deleteUser = async(username) => {
    return await User.findOneAndDelete({ username });
}

module.exports = { createUser, read, readEmail, readPassword, updateUser, deleteUser };