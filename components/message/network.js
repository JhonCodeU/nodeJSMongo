const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response');

router.get('/', function (req, res) {
    console.log(req.headers);
    res.header("Access-Control-Allow-Origin", "valor personalizado");
    //res.send('Hola desde get!');
    response.success(req, res, 'Lista de mensajes');
});

router.post('/', function (req, res) {
    //res.status(201).send({error: '', body: "creado correctamante"});
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error simulado al crear el mensaje', 500, 'Es una simulacion de los errores');
    } else { 
        response.success(req, res, 'Mensaje creado', 201);
    }
});


router.delete('/', function (req, res) {
    console.log(req.body);
    console.log(req.query);
});

module.exports = router;