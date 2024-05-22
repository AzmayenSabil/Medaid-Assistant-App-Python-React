const Symptom = require('../models/Symptoms'); // Adjust the path as needed

// Controller function to get all symptoms with value true
exports.getTrueSymptoms = async (req, res) => {
  try {
    // Find all documents
    const symptoms = await Symptom.find();

    // Filter symptoms where value is true
    const filteredSymptoms = symptoms.map(symptom => {
      const trueSymptoms = {};
      Object.keys(symptom.toObject()).forEach(key => {
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
      const { type } = req.body; // Assuming request body contains only the type attribute
  
      // Create a new symptom with only the type attribute
      const newSymptom = new Symptom({ type });
  
      // Save the new symptom to the database
      await newSymptom.save();
  
      res.status(201).json(newSymptom); // Respond with the newly created symptom
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };