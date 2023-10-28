const mongoose = require("mongoose");

const symptomsQSchema = mongoose.Schema({
  symptom: {
    type: String,
  },
  questions: [
    {
      type: String,
    },
  ]
});

const SymptomsQ = mongoose.model("SymptomsQ", symptomsQSchema);

module.exports = SymptomsQ;
