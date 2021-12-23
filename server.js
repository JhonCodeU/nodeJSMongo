const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket')
const connectionString = require('./db/connectionString');
const db = require('./db/db');

const connect = new connectionString("user", "user1234", "cluster.lp75p.mongodb.net", "Cluster");
db(connect.getConnectionString());

const router = require('./network/routes');

app.use(bodyParser.json());

router(app);

socket.connect(server);

app.use('/app', express.static('public'));

server.listen(3000, function () {
    console.log('Servidor escuchando en el puerto 3000');
});

