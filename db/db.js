const db = require("mongoose");

//Seteamos las promesas
db.Promise = global.Promise;
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("database connected");
    }
    ).catch((err) => {
        console.log(err);
    });
}

module.exports = connect;