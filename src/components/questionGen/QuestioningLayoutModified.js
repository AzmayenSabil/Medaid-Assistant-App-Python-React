import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar.js"; // Import the Navbar component
import "./styles/questioningLayout.css"; // Import the CSS file for styling

const API_URL = process.env.REACT_APP_BACKEND_URL;

const QuestioningLayout = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionThreshold, setQuestionThreshold] = useState(10);
  const navigate = useNavigate();
  const location = useLocation();

  const previousState = location.state?.chief_complaint;

  useEffect(() => {
    const fetchData = async () => {
      if (!previousState) return;

      try {
        const response = await axios.post(`${API_URL}/questions/initial`, {
          nodeName: previousState,
        });

        const initialQuestion = {
          ...response.data,
          response: "",
        };

        setQuestions([initialQuestion]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [previousState]);

  useEffect(() => {
    // Generate a random threshold between 10 and 15
    const randomThreshold = Math.floor(Math.random() * 6) + 10;
    setQuestionThreshold(randomThreshold);
  }, []);

  const handleNext = async () => {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      try {
        const response = await axios.post(`${API_URL}/questions/next`, {
          question: currentQuestion.text,
          answer: currentQuestion.response,
        });

        const newQuestion = {
          ...response.data,
          response: "",
        };

        setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSaveAnswer = (event) => {
    const updatedQuestions = [...questions];
    if (updatedQuestions[currentQuestionIndex]) {
      updatedQuestions[currentQuestionIndex].response = event.target.value;
    }
    setQuestions(updatedQuestions);
  };

  const handleFinish = () => {
    const questionsWithResponses = questions.map((q) => ({
      question: q.text,
      answer: q.response,
    }));
    console.log(questionsWithResponses);
    navigate("/summary", { state: { questions: questionsWithResponses } });
  };

  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <div className="center-container">
        <div className="container">
          <h1 className="header">Question {currentQuestionIndex + 1}</h1>
          {questions.length > 0 && questions[currentQuestionIndex] && (
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
                  {questions[currentQuestionIndex].answers &&
                    questions[currentQuestionIndex].answers.map(
                      (answer, index) => (
                        <label
                          className="question-label-horizontal"
                          key={index}
                        >
                          <input
                            type="radio"
                            name={`answer-${currentQuestionIndex}`}
                            value={answer}
                            checked={
                              questions[currentQuestionIndex].response ===
                              answer
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
              disabled={
                currentQuestionIndex >= questionThreshold ||
                !questions[currentQuestionIndex]?.response
              }
            >
              Next
            </button>
            <button
              className="button"
              onClick={handleFinish}
              // disabled={currentQuestionIndex < questionThreshold - 1}
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestioningLayout;
