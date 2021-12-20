const store = require("./store");

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

function getMessage() {
  new Promise((resolve, reject) => {
    resolve(store.list());
  });
  return store.list();
}

module.exports = {
  addMessage,
  getMessage,
};
