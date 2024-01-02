const UserModel = require('../models/user');

const findId = async(credentials) => {
    try {
        const user = await UserModel.findOne({ username: credentials.username, password: credentials.password });

        if(user) {
            return {
                _id: user._id,
                username: user.username,
                email: user.email,
                profile: user.profile
            }
        } else {
            return null;
        }
    } catch(err) {
        console.error(err);
        throw err;
    }
};

module.exports = { findId };