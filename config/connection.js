// dependencies
var mysql = require("mysql");

// setup DB connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Fhqwhgads1!",
    database: "burgers_db"
  });

  connection.connect( (err) => {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
// export connection
  module.exports = connection;