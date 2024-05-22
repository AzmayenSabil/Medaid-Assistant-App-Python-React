import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx"; // Import the Navbar component
import "./styles/summary.css"; // Import the CSS file for styling

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions } = location.state || { questions: [] };

  const handleBackToHome = () => {
    navigate("/");
  };

  // Filter out questions with empty or falsy responses
  const respondedQuestions = questions.filter((question) => question.response);

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
