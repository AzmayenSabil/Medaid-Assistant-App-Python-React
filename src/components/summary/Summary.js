import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar.js";
import "./styles/summary.css";

const API_URL = process.env.REACT_APP_BACKEND_URL;

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions } = location.state || { questions: [] };

  const handleBackToHome = () => {
    navigate("/");
  };

  // Filter out questions with empty or falsy responses
  const respondedQuestions = questions.filter((question) => question.answer);

  // Prepare the data to send to the server
  const symptomData = respondedQuestions.map((question) => ({
    question: question.question, // Use 'question' instead of 'label'
    answer: question.answer, // Include both "Yes" and "No"
  }));
  console.log(symptomData);

  useEffect(() => {
    const sendDataToServer = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/questions/patient-history`,
          {
            symptoms: symptomData,
          }
        );

        console.log("Data sent successfully:", response.data);
      } catch (error) {
        console.error("Error sending data:", error);
      }
    };

    sendDataToServer();
  }, [symptomData]);

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
                  {index + 1}: {question.question}
                </h2>
                <p>
                  <strong>Answer:</strong> {question.answer}
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
