const SymptomsQ = require("../models/SymptomsQ");

//
const getSymptomsQ = async (req, res) => {
  const symptomsQ = await SymptomsQ.find();
  res.json(symptomsQ);
};

const setSymptomsQ = async (req, res) => {
  const symptomsQ = new SymptomsQ({
    symptom: req.body.symptom,
    questions: req.body.questions,
  });
  await symptomsQ.save();
  res.json(symptomsQ);
};

const putSymptomsQ = async (req, res) => {
  const symptomsQ = await SymptomsQ.findById(req.body.id);
  symptomsQ.symptom = req.body.symptom;
  symptomsQ.questions = req.body.questions;
  await symptomsQ.save();
  res.json(symptomsQ);
};

const deleteSymptomsQ = async (req, res) => {
  await SymptomsQ.deleteOne({ _id: req.body.id });
  res.json({ message: "SymptomsQ deleted successfully" });
};

//

module.exports = {
  getSymptomsQ,
  setSymptomsQ,
  putSymptomsQ,
  deleteSymptomsQ,
};
