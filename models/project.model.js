const { getPool } = require("../db");
const pool = getPool();

const getAllProjects = (Projects) => {
	// When using prepared statements, if you execute same statement again, it will be picked from a LRU cache
	// which will save query preparation time and give better performance

	return pool.then(async (connection) => {
		// Rows and fields are returned, we take only rows now.
		const [rows] = await connection.execute("SELECT * FROM `Project_Cards`", [
			Projects,
		]);
		return rows;
	});
};

// const getProject = (id) => {
// When using prepared statements, if you execute same statement again, it will be picked from a LRU cache
// which will save query preparation time and give better performance
// return pool.then(async (connection) => {
// Rows and fields are returned, we take only rows now.
// const [
// rows,
// ] = await connection.execute(
// "SELECT * FROM new_schema.project_history WHERE `userId` = ?;",
// [id]
// );
// return rows;
// });
// };

//Creates a connection pool to the database for sharing connections with multiple people
// const pool = mysql.createPool({
// host: 'localhost',
// user: 'root',
// database: 'test',
// waitForConnections: true,
// connectionLimit: 10, //How many connections can be present at a time
// queueLimit: 0
// })

module.exports = {
	getAllProjects,
};
