// Establishes a connection to MySQL database
var mysql = require("mysql");
require('dotenv').config();
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "billPay2Db"
});


connection.connect(function (err) {
if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// exports to ORM to use
module.exports = connection;