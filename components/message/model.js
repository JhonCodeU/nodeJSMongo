const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

const model = mongoose.model("Message", mySchema);

module.exports = model;
