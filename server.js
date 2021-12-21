const express = require('express');
const bodyParser = require('body-parser');

//Databases
const connectionString = require('./db/connectionString');
const db = require('./db/db');

const connect = new connectionString("user", "user1234", "cluster.lp75p.mongodb.net", "Cluster");
db(connect.getConnectionString());

const router = require('./network/routes');


var app = express();
app.use(bodyParser.json());

router(app);

app.use('/app', express.static('public'));

app.listen(3000, function () {
    console.log('Servidor escuchando en el puerto 3000');
});

