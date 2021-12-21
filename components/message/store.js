const Model = require("./model");

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
