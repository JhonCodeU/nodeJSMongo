const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', function (socket) {
    console.log('New user connected');
    socket.emit('message','Welcome')
})

setInterval(function () {
    io.emit('message', 'Hello everyone');
},3000)

server.listen(8080, function () {
    console.log('Server listening on port 8080');
})