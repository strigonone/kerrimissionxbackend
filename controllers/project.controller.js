const {
  getAllProjects,
  getBeginnerProj,
  getIntermediateProj,
  getAdvancedProj,
} = require("../models/project.model");

const { resultToJSON } = require("../utils");

const get = async (req, res) => {
  const { Projects } = req.body; //API Paramaters for all Project Library Data
  if (Projects) {
    const queryResult = await getAllProjects(Projects);
    const jsonResult = resultToJSON(queryResult);

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204#:~:text=The%20HTTP%20204%20No%20Content,included%20in%20such%20a%20response.
    if (jsonResult.length === 0) {
      res.status(204).end();
      console.log("Status_No Content. HTTP status code: 204");
    } else {
      res.status(200).json(jsonResult);
      console.log("Data cannot be extracted. HTTP status code: 200");
    }
  } else {
    console.error("Error: Missing parameter");
    res.status(400).send("Missing Parameter");
  }
};

const update = async (req, res) => {
  res.status(200).json({ User: "Kerri-Anne Palmer" });
};

const getOne = async (req, res) => {
  const Projects = req.params;
  if (Projects) {
    // SQL query to be run - getBeginnerProjects and results to user returned
    const queryResult = await getBeginnerProj(Projects);
    console.log(queryResult);
    const jsonResult = resultToJSON(queryResult);

    // If there are no rows returned in the SQL Query result.
    if (jsonResult.length === 0) {
      res.status(204).end();
      console.log("Data required");
    } else {
      res.status(200).json(jsonResult);
      console.log("200");
    }
  } else {
    console.error("Error: Missing parameter");
    res.status(400).send("Missing Parameter");
  }
};

const getTwo = async (req, res) => {
  const Projects = req.params;
  if (Projects) {
    // SQL query to be run - getIntermediateProjects and results to user retured
    const queryResult = await getIntermediateProj(Projects);
    console.log(queryResult);
    const jsonResult = resultToJSON(queryResult);

    // If there are no rows returned in the SQL Query result.
    if (jsonResult.length === 0) {
      res.status(204).end();
      console.log("Data required");
    } else {
      res.status(200).json(jsonResult);
      console.log("");
    }
  } else {
    console.error("Error: Missing parameter");
    res.status(400).send("Missing Parameter");
  }
};

const getThree = async (req, res) => {
  const Projects = req.params;
  if (Projects) {
    // SQL query to be run - getAdvancedProjects and results to user retured
    const queryResult = await getAdvancedProj(Projects);
    console.log(queryResult);
    const jsonResult = resultToJSON(queryResult);

    // If there are no rows returned in the SQL Query result.
    if (jsonResult.length === 0) {
      res.status(204).end();
      console.log("Data required");
    } else {
      res.status(200).json(jsonResult);
      console.log("");
    }
  } else {
    console.error("Error: Missing parameter");
    res.status(400).send("Missing Parameter");
  }
};

module.exports = { get, getOne, getTwo, getThree, update };
