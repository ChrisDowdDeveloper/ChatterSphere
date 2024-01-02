const Redis = require('ioredis');
const redisService = require('./redis.service');

const redis = new Redis();

const login = async(req, res) => {
    try {
        const success = redisService.findId(req.body);
        if(success) {
            const id = success._id
            let sessionData = success.profile;

            await redis.set(`session: ${id}`, JSON.stringify(sessionData));
            return res.status(200).json({ message: 'Logged in successfully' });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { login };