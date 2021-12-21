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
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser, filterMessage) {
  let filter = {};
  if (filterUser) {
    filter = {
      user: filterUser,
    };
  }
  if (filterMessage) {
    filter = {
      ...filter,
      message: filterMessage,
    };
  }
  return await Model.find(filter);
}

async function updateMessage(id, message) {
  const updatedMessage = await Model.updateOne(
    { _id: id },
    { message: message },
    { new: true }
  );
  return updatedMessage;
}

const removeMessage = async (id) => {
  const siExiste = await ifExist(id);
  if (!siExiste) {
    return siExiste;
  }
  return await Model.deleteOne({
    _id: id,
  });
};

const ifExist = async (id) => {
  return await Model.exists({
    _id: id,
  });
};

module.exports = {
  add: addMessage,
  list: getMessages,
  updateMessage: updateMessage,
  removeMessage: removeMessage,
  //get
  //post
  //delete
};
