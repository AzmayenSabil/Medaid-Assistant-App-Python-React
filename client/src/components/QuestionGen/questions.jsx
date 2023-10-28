import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Question from "./Question";
import questionsData from "./questions.json";
import "./styles/questions.css";

import Navbar from "../navbar/Navbar.jsx";

function Questions({ chiefComplaint }) {
  const location = useLocation();

  // console.log("From useLocation state - complaint", location.state.chiefComplaint)
  const complaint = location.state.chiefComplaint || "Common cold";

  console.log("From questions", complaint);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleFinishQuestions = () => {
    navigate("/complaint");
  };

  const getRelatedQuestions = (complaint) => {
    const relatedQuestions = [];

    for (const question of questionsData) {
      if (question.symptoms.includes(complaint)) {
        relatedQuestions.push(question);
      }
    }

    return relatedQuestions;
  };

  let questions = getRelatedQuestions(complaint);
  // console.log(questions)
  // console.log(questions[0].options)
  // console.log(questions[0].questions)
  // console.log(questions[0].questions.length)

  return (
    <div>
      <Navbar />
      <div className="questions card">
        <h2 className="complaints">Chief Complaints: {complaint}</h2>
        {questions[0].questions.length > 0 &&
        currentQuestionIndex < questions[0].questions.length ? (
          <Question
            question={questions[0].questions[currentQuestionIndex]}
            options={questions[0].options}
            onChange={handleAnswerChange}
          />
        ) : (
          <div>
            <p className="completion">Thank you for your answers!</p>
            <button
              onClick={handleFinishQuestions}
              className="completion-button"
            >
              Finish
            </button>
          </div>
        )}
        <div class="buttons">
          {currentQuestionIndex > 0 && (
            <button
              onClick={handlePreviousQuestion}
              className="back-button"
              style={{ margin: "10px" }}
            >
              Back
            </button>
          )}
          {currentQuestionIndex < questions[0].questions.length && (
            <button
              onClick={handleNextQuestion}
              className="continue-button"
              style={{ margin: "10px" }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Questions;

