const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "123",
  database: "odysseyhomer"
});
module.exports = connection;
