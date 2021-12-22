const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = Schema({
    name: String,
});

const model = mongoose.model("User", mySchema);

module.exports = model;
