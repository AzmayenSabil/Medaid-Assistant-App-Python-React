const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const questionRoutes = require("./routes/questionRoutes");
const symptomRoutes = require('./routes/symptomsRoutes');

const app = express();

const allowedOrigins = [
  "https://medaid-assistant-app-client-2le6jqjul-azmayensabils-projects.vercel.app",
  "http://localhost:5000",
];

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://admin:admin@cluster0.jcoztbt.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Middleware
app.use(bodyParser.json());
app.use(cors());
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//   })
// );

// Routes
app.use("/questions", questionRoutes);
app.use('/symptoms', symptomRoutes);

app.use("/", (req, res) => {
  res.send("SERVER IS RUNNING");
})

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
