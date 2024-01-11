const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./users/users.router');
const chatroomRouter = require('./chatroom/chatroom.router');
const messageRouter = require('./messages/messages.router');
const Redis = require('ioredis');
const redis = new Redis();
const redisRouter = require('./redis/redis.router');
const errorHandler = require('./errors/errorHandler');
const notFound = require('./errors/notFound');


const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);
app.use('/chatrooms', chatroomRouter);
app.use('/messages', messageRouter);
app.use('/login', redisRouter);

app.use(notFound);
app.use(errorHandler);

mongoose.connect('mongodb://localhost:27017/realTimeChatApp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = app;