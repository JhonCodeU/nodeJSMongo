const connectionString = require('./db/connectionString');
const connect = new connectionString("user", "user1234", "cluster.lp75p.mongodb.net", "Cluster");
const config = {
    dbUrl: process.env.DB_URL || connect.getConnectionString(),
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app'
};

module.exports = config;