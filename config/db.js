//Database connection and configuration
const mysql = require('mysql2');
const db = mysql.createPool({
    host: "localhost",
    database: "mysqldb",
    password: "password",
    user: "root"
});

module.exports = db;