const express = require('express');
const router = express.Router();
const redisController = require('./redis.controller');


router.post('/', redisController.login);


module.exports = router;