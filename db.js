const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12583",
  database: "libreria",
});

connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("MYSQL database has been connected!");
  }
});

module.exports = connection;

