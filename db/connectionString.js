
class ConnectionString {
    constructor(user, password, host, database) {
        this.user = user;
        this.password = password;
        this.host = host;
        this.database = database;
    }

    getConnectionString() {
        return `mongodb+srv://${this.user}:${this.password}@${this.host}/${this.database}?retryWrites=true&w=majority`;
    }
}

module.exports = ConnectionString;