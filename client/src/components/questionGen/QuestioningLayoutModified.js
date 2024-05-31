import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar.js"; // Import the Navbar component
import "./styles/questioningLayout.css"; // Import the CSS file for styling

const API_URL = process.env.REACT_APP_BACKEND_URL;

const QuestioningLayout = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("http://localhost:5000/questions");
        const response = await axios.get(`${API_URL}/questions`);

        setQuestions(
          response.data.map((question) => ({
            ...question,
            response: "",
          }))
        );
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
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].response = event.target.value;
    setQuestions(updatedQuestions);
    // console.log("Updated Questions:", updatedQuestions);
  };

  const handleFinish = () => {
    navigate("/summary", { state: { questions } });
  };

  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <div className="center-container">
        <div className="container">
          <h1 className="header">Question {currentQuestionIndex + 1}</h1>
          {questions.length > 0 && (
            <div className="question-box">
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
                      checked={
                        questions[currentQuestionIndex].response === "Yes"
                      }
                      onChange={handleSaveAnswer}
                    />
                    <span className="question-radio-label">Yes</span>
                  </label>
                  <label className="question-label">
                    <input
                      type="radio"
                      name={`answer-${currentQuestionIndex}`}
                      value="No"
                      checked={
                        questions[currentQuestionIndex].response === "No"
                      }
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
                          checked={
                            questions[currentQuestionIndex].response === answer
                          }
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
                  value={questions[currentQuestionIndex].response}
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
