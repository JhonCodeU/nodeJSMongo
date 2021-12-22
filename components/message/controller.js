const store = require("./store");

function getMessages(filterUser, filterMessage) {
  return new Promise((resolve, reject) => {
    try {
      resolve(store.list(filterUser, filterMessage));
    } catch (error) {
      reject(error);
    }
  });
}

function addMessage(user, message, chat, file) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("Error: faltan datos");
      return reject("Invalid data");
    }

    let fileUrl = '';
    if (file) {
      fileUrl = `http://localhost:3000/app/uploads/${file.filename}`;
    }
    
    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      file: fileUrl,
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

const deleteMessage = (id) => {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject("ID invalido");
    }
    await store
      .removeMessage(id)
      .then((resultado) => {
        if (resultado) {
          resolve("Mensaje eliminado");
        } else {
          reject("[Controller] El dato no existe en Store");
        }
      })
      .catch((err) => reject(err));
  });
};

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
