const connection = mysql.createConnection({
  host: "SG-MissionX-4265-mysql-master.servers.mongodirector.com",
  database: "MissionXLibrary",
  user: "sgroot",
  password: "RKyjrf^MIB2sfR5z",
  port: 3306,
  ssl: {
    ca: Buffer.from("../SSL/SLLCertificate.pem", "base64").toString("ascii"),
  },
}),

module.exports = { config };
