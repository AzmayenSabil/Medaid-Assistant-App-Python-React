const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));


// Routes
const symptomsQRoute = require("./routes/symptomsQ");


// API URL
app.use("/api/symptomsQ", symptomsQRoute);

app.get("/", (req, res) => {
  res.send("Hello I am node.js application");
});

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.jcoztbt.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);
// App Port
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on ${port} port`);
});
