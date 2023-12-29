const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./users/users.router');

const app = express();

app.use(express.json());
app.use('/users', usersRouter);

mongoose.connect('mongodb://localhost:27017/realTimeChatApp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = app;