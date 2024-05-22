const express = require("express");
const router = express.Router();
const { getTrueSymptoms, createSymptom } = require("../controllers/symtomsController");

// Route to get all symptoms with value true
router.get("/", getTrueSymptoms);
router.post("/", createSymptom);

module.exports = router;
