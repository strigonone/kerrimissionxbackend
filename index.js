const express = require("express");
const cors = require("cors");
// const bodyParser = require('body-parser');
const routesHandler = require("./routes/handler.js");

// get the MySQL client
const mysql = require("mysql2");
const { parse } = require("dotenv/types");

//Initiate an application by calling the express() method
const app = express();

//Allows all CORS requests - ignoring security
app.use(cors());

// Test route to make sure the backend can be reached
app.get("/test", (req, res) => {
  res.send("Test Back-End");
});

// Backend routing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routesHandler);

// Set the port for the server to run on current environment (Heroku host) or port 4000
var PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}.`);
});

// Database connection at backend with MySQL below:

// create the connection to mysql database through scalegrid.io dbm
const connection = mysql.createConnection({
  host: "SG-MissionX-4265-mysql-master.servers.mongodirector.com",
  database: "MissionXLibrary",
  user: "sgroot",
  password: "RKyjrf^MIB2sfR5z",
});

// Query practice with Sebin
// connection.query(
//   'SELECT * FROM `table` WHERE `Variable` = "Value" AND `Variable` = Value2',
//   function (err, results, fields) {
//     const results; = JSON.parse(JSON.stringify(results)); // Creates a constant that takes results and translates to JSON. JSON Exchange data formatter.
//     Or A helper method to convert the result to proper JSON.
//     const parseResultsToJSON = (resultObj) => JSON.parse(JSON.stringify(resultObj));
//     console.log(jsonresults); // results contains parsed rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// with placeholder, most secure way
// connection.query(
// "SELECT * FROM `table` WHERE `Variable` = ? AND `Variable` > ?",
// ["Page", 45],
// function (err, results) {
// console.log(results);
// }
// );
