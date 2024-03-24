const dotenv = require('dotenv');

dotenv.config();

const { DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT} = process.env;

const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    server: DB_SERVER,
    port: parseInt(DB_PORT),
    database: DB_NAME,
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
};

module.exports = {
    config
};