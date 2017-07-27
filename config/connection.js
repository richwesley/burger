// Set up MySQL connection.
var mysql = require("mysql");

if(process.env.JAWS_URL) {
  connection = mysql.createConnection(process.env.JAWSSDB_URL);
}else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "jellyBelly"
  });
};


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;