const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./users/users.router');
const chatroomRouter = require('./chatroom/chatroom.router');
const messageRouter = require('./messages/messages.router');

const app = express();

app.use(express.json());
app.use('/users', usersRouter);
app.use('/users/:username/chatrooms', chatroomRouter);
app.use('/users/:username/chatroom/:chatroomName/messages', messageRouter);

mongoose.connect('mongodb://localhost:27017/realTimeChatApp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = app;