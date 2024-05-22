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

// exports.createQuestion = async (req, res) => {
//   try {
//     const { text, type, category, answers, label } = req.body;

//     const newQuestion = new Question({
//       text,
//       type,
//       category,
//       answers,
//       label,
//     });

//     const question = await newQuestion.save();
//     res.json(question);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// };


exports.createQuestion = async (req, res) => {
  try {
    const questions = req.body;

    // Check if the input is an array
    if (!Array.isArray(questions)) {
      return res.status(400).send("Input should be an array of questions");
    }

    // Validate and save each question
    const savedQuestions = [];
    for (const questionData of questions) {
      const { text, type, category, answers, label } = questionData;

      // Ensure type is either "yes/no" or "range"
      if (!["yes/no", "range"].includes(type)) {
        return res.status(400).send(`Invalid type for question: ${text}`);
      }

      const newQuestion = new Question({
        text,
        type,
        category,
        answers,
        label,
      });

      // Save the question and add the result to the savedQuestions array
      const savedQuestion = await newQuestion.save();
      savedQuestions.push(savedQuestion);
    }

    // Respond with the array of saved questions
    res.json(savedQuestions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

