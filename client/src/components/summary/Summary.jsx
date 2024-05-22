import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import Navbar from "../navbar/Navbar.jsx";
import "./styles/summary.css";

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions } = location.state || { questions: [] };

  const handleBackToHome = () => {
    navigate("/");
  };

  // Filter out questions with empty or falsy responses
  const respondedQuestions = questions.filter((question) => question.response);

  // Prepare the data to send to the server
  const symptomData = respondedQuestions.map((question) => ({
    symptom: question.label,
    present: question.response === "Yes", // Assuming "Yes" means the symptom is present
  }));
  console.log(symptomData);

  // Call sendDataToServer when the component mounts
  useEffect(() => {
    // Send the data as a POST request
    const sendDataToServer = async () => {
      try {
        const response = await axios.post("http://localhost:5000/symptoms", {
          symptoms: symptomData,
        });
        console.log("Data sent successfully:", response.data);
      } catch (error) {
        console.error("Error sending data:", error);
      }
    };

    sendDataToServer();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="summary-center-container">
        <div className="summary-header">
          <h1>Summary of Your Responses</h1>
        </div>
        <div className="summary-container">
          <div className="summary-content">
            {respondedQuestions.map((question, index) => (
              <div key={index} className="summary-question">
                <h2>
                  {index + 1}: {question.text}
                </h2>
                <p>
                  <strong>Answer:</strong> {question.response}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button className="button" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Summary;
