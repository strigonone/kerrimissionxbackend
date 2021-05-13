const { getAllProjects } = require("../models/project.model");

const { resultToJSON } = require("../utils");

const get = async (req, res) => {
  const Projects = req.body; //API Paramaters for all Project Library Data
  if (Projects) {
    const queryResult = await getAllProjects(Projects);
    const jsonResult = resultToJSON(queryResult);

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204#:~:text=The%20HTTP%20204%20No%20Content,included%20in%20such%20a%20response.
    if (jsonResult.length === 0) {
      res.status(204).end();
      console.log("Status_No Content. HTTP status code: 204");
    } else {
      res.status(200).json(jsonResult);
      console.log("Success!");
    }
  } else {
    console.error("Error: Missing parameter");
    res.status(400).send("Missing Parameter");
  }
};

const update = async (req, res) => {
  res.status(200).json({ User: "Kerri-Anne Palmer" });
};

module.exports = { get, update };
