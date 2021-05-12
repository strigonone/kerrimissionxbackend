const { Router } = require("express");
const {
  get,
  getOne,
  getTwo,
  getThree,
  update,
} = require("../controllers/project.controller");

const router = Router();

// GET /api/project + /
router.get("/getAllData", get);

// PATCH /api/project + /
router.patch("/", update);

// GET /api/project/ + :id/
router.get("/getbeginnerdata", getOne);

router.get("/getintermediatedata", getTwo);

router.get("/getadvanceddata", getThree);

module.exports = router;
