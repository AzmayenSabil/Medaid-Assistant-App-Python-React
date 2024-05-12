const Question = require("../models/Question");

exports.getQuestions = async (req, res) => {
    console.log("Responsed");
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.createQuestion = async (req, res) => {
  try {
    const { text, type, category, answers, label } = req.body;

    const newQuestion = new Question({
      text,
      type,
      category,
      answers,
      label,
    });

    const question = await newQuestion.save();
    res.json(question);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
