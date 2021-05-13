const { Router } = require("express");
const { get, update } = require("../controllers/project.controller");

const router = Router();

// GET /api/project + /
router.get("/getProjects", get);

// PATCH /api/project + /
router.patch("/", update);

module.exports = router;
