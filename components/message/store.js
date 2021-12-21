const db = require("mongoose");
//mongodb+srv://user:<password>@cluster.lp75p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const user = "user";
const password = "user1234";
const host = "cluster.lp75p.mongodb.net";
const database = "Cluster";
const url = `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`;

const Model = require("./model");

db.Promise = global.Promise;
db.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log("Database connection error " + err);
  });

function addMessage(message) {
  //list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage() {
  //return list;
  const messages = await Model.find();
  return messages;
}

async function updateMessage(id, message) {
    const updatedMessage = await Model.updateOne({ _id: id }, { message: message }, { new: true });
    return updatedMessage;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateMessage: updateMessage,
  //get
  //post
  //delete
};
