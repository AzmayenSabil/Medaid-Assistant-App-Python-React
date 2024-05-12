import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar.jsx"; // Import the Navbar component
import "./styles/questioningLayout.css"; // Import the CSS file for styling

const QuestioningLayout = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/questions");
        setQuestions(response.data);
        setAnswers(new Array(response.data.length).fill(""));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleBack = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSaveAnswer = (event) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = event.target.value;
    setAnswers(updatedAnswers);
  };

  const handleFinish = () => {
    console.log("Answers:", answers);
  };

  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <div className="center-container">
        {" "}
        {/* Center the question container */}
        <div className="questioning-container">
          <h1 className="header">Questions</h1>
          {questions.map((question, index) => (
            <div key={index} className="question-box">
              <h2 className="question-text">{question.text}</h2>
              {question.type === "yes/no" ? (
                <div className="option-container">
                  <label className="option-label">
                    <input
                      type="radio"
                      name={`answer-${index}`}
                      value="Yes"
                      onChange={handleSaveAnswer}
                    />
                    Yes
                  </label>
                  <label className="option-label">
                    <input
                      type="radio"
                      name={`answer-${index}`}
                      value="No"
                      onChange={handleSaveAnswer}
                    />
                    No
                  </label>
                </div>
              ) : (
                <input
                  type="text"
                  placeholder="Type your answer here"
                  className="text-input"
                  value={answers[currentQuestionIndex]}
                  onChange={handleSaveAnswer}
                />
              )}
            </div>
          ))}
          <div className="button-container">
            <button
              className="button"
              onClick={handleBack}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              className="button"
              onClick={handleNext}
              disabled={currentQuestionIndex === questions.length - 1}
            >
              Next
            </button>
            <button className="button" onClick={handleFinish}>
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestioningLayout;
