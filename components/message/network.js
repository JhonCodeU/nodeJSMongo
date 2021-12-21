const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

//Get all messages
router.get("/", function (req, res) {
  const filterUser = req.query.user || null;
  const filterMessage = req.query.message || null;

  controller
    .getMessages(filterUser, filterMessage)
    .then((messagesList) => {
      response.success(req, res, messagesList, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected error", 500, e);
    });
});

//Create a new message
router.post("/", async (req, res) => {
  const { user, message } = req.body;

  try {
    const fullMessage = await controller.addMessage(user, message);
    response.success(req, res, fullMessage, 201);
  } catch (error) {
    response.error(
      req,
      res,
      "Informacion invalida",
      500,
      "Error en el contenido"
    );
  }
});

//Update a message
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { user, message } = req.body;
  controller
    .updateMessage(id, message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "Error interno", 500, err);
    });
});

//Remove a message
router.delete("/", function (req, res) {
  console.log(req.body);
  console.log(req.query);
});

module.exports = router;
