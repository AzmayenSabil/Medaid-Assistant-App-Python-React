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
        console.log(response.data)
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
        <div className="container">
          <h1 className="header">Question {currentQuestionIndex + 1}</h1>
          {questions.length > 0 && (
            <div className="question-box">
              {/* <h2 className="question-title">
                Question {currentQuestionIndex + 1}
              </h2> */}
              <h3 className="question-text">
                {questions[currentQuestionIndex].text}
              </h3>
              {questions[currentQuestionIndex].type === "yes/no" ? (
                <div className="question-options">
                  <label className="question-label">
                    <input
                      type="radio"
                      name={`answer-${currentQuestionIndex}`}
                      value="Yes"
                      onChange={handleSaveAnswer}
                    />
                    <span className="question-radio-label">Yes</span>
                  </label>
                  <label className="question-label">
                    <input
                      type="radio"
                      name={`answer-${currentQuestionIndex}`}
                      value="No"
                      onChange={handleSaveAnswer}
                    />
                    <span className="question-radio-label">No</span>
                  </label>
                </div>
              ) : questions[currentQuestionIndex].type === "range" ? (
                <div className="question-options-horizontal">
                  {questions[currentQuestionIndex].answers.map(
                    (answer, index) => (
                      <label className="question-label-horizontal" key={index}>
                        <input
                          type="radio"
                          name={`answer-${currentQuestionIndex}`}
                          value={answer}
                          onChange={handleSaveAnswer}
                        />
                        <span className="question-radio-label">{answer}</span>
                      </label>
                    )
                  )}
                </div>
              ) : (
                <input
                  type="text"
                  placeholder="Type your answer here"
                  className="question-input"
                  value={answers[currentQuestionIndex]}
                  onChange={handleSaveAnswer}
                />
              )}
            </div>
          )}
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
