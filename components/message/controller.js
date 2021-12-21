const store = require("./store");

function getMessages(filterUser, filterMessage) {
    return new Promise((resolve, reject) => {
        try {
            resolve(store.list(filterUser, filterMessage))
        } catch (error) {
            reject(error)
        }
    })
}

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("Error: faltan datos");
      return reject("Invalid data");
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };

    console.log(fullMessage);
    //agregamos el mensaje al store
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      console.error("Error: faltan datos");
      return reject("Invalid data");
    }

    const result = await store.updateMessage(id, message);
    resolve(result);
  });
  
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
};
