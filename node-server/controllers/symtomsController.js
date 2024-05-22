const Symptom = require("../models/Symptoms"); // Adjust the path as needed

// Controller function to get all symptoms with value true
exports.getTrueSymptoms = async (req, res) => {
  try {
    // Find all documents
    const symptoms = await Symptom.find();

    // Filter symptoms where value is true
    const filteredSymptoms = symptoms.map((symptom) => {
      const trueSymptoms = {};
      Object.keys(symptom.toObject()).forEach((key) => {
        if (symptom[key] === true) {
          trueSymptoms[key] = symptom[key];
        }
      });
      return trueSymptoms;
    });

    res.status(200).json(filteredSymptoms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to create a new symptom
exports.createSymptom = async (req, res) => {
  try {
    const { symptoms } = req.body; // Assuming request body contains an array of symptoms
    console.log(symptoms);

    // Prepare a new symptom document object
    const newSymptomData = {};
    symptoms.forEach(({ symptom, present }) => {
      newSymptomData[symptom] = present;
    });

    // Create a new symptom document with the provided values
    const newSymptom = new Symptom(newSymptomData);

    // Save the new symptom document to the database
    await newSymptom.save();

    res.status(201).json(newSymptom); // Respond with the newly created symptom document
  } catch (error) {
    console.error("Error creating symptom:", error);
    res.status(500).json({ message: error.message });
  }
};
