const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

//Get all users
router.get("/", function (req, res) {
    controller.getUsers().then((usersList) => {
        response.success(req, res, usersList, 200);
    }).catch((e) => {
        response.error(req, res, "Unexpected error", 500, e);
    });
});

// create a new user
router.post("/", async (req, res) => {
    const { name } = req.body;
    
    try {
        const result = await controller.addUser(name);
        response.success(req, res, result, 201);
    } catch (error) {
        response.error(req, res, "Internal error", 500, error);
    }

});

module.exports = router;