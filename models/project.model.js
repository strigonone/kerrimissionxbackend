const { getPool } = require("../db");
const pool = getPool();

const getAllProjects = (StudentProjets) => {
  // When using prepared statements, if you execute same statement again, it will be picked from a LRU cache
  // which will save query preparation time and give better performance

  return pool.then(async (connection) => {
    // Rows and fields are returned, we take only rows now. All Projects Returned no conditions set.
    const [rows] = await connection.execute("SELECT * Project_Cards;", [
      allProjects,
    ]);
    return rows;
  });
};

//Level selections
const getBeginnerProj = (begProjets) => {
  return pool.then(async (connection) => {
    // Rows and fields are returned, we take only rows now. Begginer Projects Returned.
    const [rows] = await connection.execute(
      "SELECT * Project_Cards WHERE 'Level' = 'Beginner'",
      [beginnerProjects]
    );
    return rows;
  });
};

const getIntermediateProj = (intProjets) => {
  return pool.then(async (connection) => {
    // Rows and fields are returned, we take only rows now. Intermediate Projects Returned.
    const [rows] = await connection.execute(
      "SELECT * Project_Cards WHERE 'Level' = 'Intermediate'",
      [intermediateProjects]
    );
    return rows;
  });
};

const getAdvancedProj = (advProjets) => {
  return pool.then(async (connection) => {
    // Rows and fields are returned, we take only rows now. Advanced Projects Returned.
    const [rows] = await connection.execute(
      "SELECT * Project_Cards WHERE 'Level' = 'Advanced'",
      [advancedProjects]
    );
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
  getBeginnerProj,
  getIntermediateProj,
  getAdvancedProj,
};
