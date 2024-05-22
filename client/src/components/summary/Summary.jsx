import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx"; // Import the Navbar component


const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions } = location.state || { questions: [] };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="summary-container">
        <h1>Summary of Your Responses</h1>
        {questions.map((question, index) => (
          <div key={index} className="summary-question">
            <h2>{question.text}</h2>
            <p>
              <strong>Answer:</strong> {question.response}
            </p>
          </div>
        ))}
        <button className="button" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Summary;
