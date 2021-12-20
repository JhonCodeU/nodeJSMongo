const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response');

router.get('/', function (req, res) {
    controller.getMessage().then((message) => {
        response.success(req, res, message, 200)
    }).catch((err) => {
        response.error(req, res, 'error: ', 500, err)
    })
});

router.post("/", async (req, res) => {

    const { user, message } = req.body

    try {
        const fullMessage = await controller.addMessage(user, message)
        response.success(req, res, fullMessage, 201)
    } catch (error) {
        response.error(req, res, "Informacion invalida", 500, "Error en el contenido")
    }

})

router.delete('/', function (req, res) {
    console.log(req.body);
    console.log(req.query);
});

module.exports = router;