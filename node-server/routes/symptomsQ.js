const express = require("express");
const router = express.Router();

const {
  getSymptomsQ,
  setSymptomsQ,
  putSymptomsQ,
  deleteSymptomsQ,
} = require("../controller/symptomsQController");

//
router.get("/", getSymptomsQ);

router.post("/", setSymptomsQ);

router.put("/:id", putSymptomsQ);

router.delete("/:id", deleteSymptomsQ);

//

module.exports = router;
