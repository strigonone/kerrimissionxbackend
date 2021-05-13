const dbconfig = {
	host: "SG-MissionX-4265-mysql-master.servers.mongodirector.com",
	database: "MissionXLibrary",
	user: "sgroot",
	password: "RKyjrf^MIB2sfR5z",
	port: 3306,
	ssl: {
		ca: Buffer.from(`../SSL/getClusterSSLPublicKey.pem`, "base64").toString(
			"ascii"
		),

		rejectUnauthorized: false,
	},
};

module.exports = { dbconfig };
