const Question = require("../models/Question");
const xml2js = require("xml-js");
const Graph = require("graphlib").json;
var fs = require("fs");

// // Parse the graph from the XML file
// function parseGraph(filename) {
//     const xmlString = fs.readFileSync(filename, 'utf8');
//     const options = { compact: true };
//     const graphJson = xml2js.xml2json(xmlString, options);
//     const graphData = JSON.parse(graphJson);
    
//     // Extract nodes and edges from the parsed graph data
//     const nodes = graphData.graphml.graph[0].node.map(node => node._attributes.id);
//     const edges = graphData.graphml.graph[0].edge.map(edge => ({
//         source: edge._attributes.source,
//         target: edge._attributes.target
//     }));
    
//     return { nodes, edges };
// }

// // Ask a question based on the current symptom
// function askQuestion(symptom) {
//     // Implement your question asking mechanism here
//     console.log(`Do you have ${symptom}?`);
//     // You can prompt the user for input here
// }


// // Generate conversation JSON by traversing the graph
// function generateConversationJson(graph, currentSymptom, threshold) {
//     const conversation = {};
//     const visited = {};
//     let questionsAsked = 0;

//     while (!visited[currentSymptom] && questionsAsked < threshold) {
//         visited[currentSymptom] = true;
//         if (currentSymptom === threshold) {
//             conversation["Threshold reached!"] = { question: "", value: "" };
//             break;
//         }

//         const node = graph.edges.find(edge => edge.source === currentSymptom);
//         if (!node) {
//             conversation["No further questions."] = { question: "", value: "" };
//             break;
//         }

//         // Ask question based on current symptom
//         const question = `Do you have ${currentSymptom}?`;
//         const response = askQuestion(currentSymptom) ? "yes" : "no";
//         conversation[currentSymptom] = { question, value: response };

//         currentSymptom = node.target;
//         questionsAsked++;
//     }

//     return conversation;
// }

// exports.getQuestions = async (req, res) => {
//   const graphFile = "symptoms_graph/graph.graphml";
//   const threshold = 10;
//   const graph = parseGraph(graphFile);
//   const currentSymptom = req.query.chief_complaint || "Chest Pain"; // Use the symptom passed through req.query.chief_complaint, defaulting to "Chest Pain" if not provided
//   const conversationJson = generateConversationJson(
//     graph,
//     currentSymptom,
//     threshold
//   );
//   console.log(conversationJson)
//   res.json(conversationJson);
// };

exports.getQuestions = async (req, res) => {
  // console.log(req.query.chief_complaint);
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
