const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["yes/no", "range"],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
