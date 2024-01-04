const http = require('http')
const socketIo = require('socket.io');
const app = require('./app');
const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    })
})

function listener() {
    console.log(`Listening on Port ${PORT}!`);
}

app.listen(PORT, listener);