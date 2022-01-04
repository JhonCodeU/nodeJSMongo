const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket')
const db = require('./db/db');

db(config.dbUrl);

const router = require('./network/routes');

app.use(cors());

app.use(bodyParser.json());
router(app);
socket.connect(server);

app.use(config.publicRoute, express.static('public'));

server.listen(config.port, function () {
    console.log('Servidor escuchando en el host '+ config.host +':', config.port);
});

