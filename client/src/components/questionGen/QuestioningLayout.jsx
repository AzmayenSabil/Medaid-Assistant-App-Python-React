import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar.jsx";
import "./styles/questioningLayout.css";

const QuestioningLayout = ({ chiefComplaint }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const answerRef = useRef(null);
  const [questionsEnded, setQuestionsEnded] = useState(false);

  const fetchData = async () => {
    try {
      const data = location.state;
      console.log("running");
      const response = await axios.post(
        "http://127.0.0.1:5000/get_questions",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data.questions);
      setQuestions(response.data.questions);
      setAnswers(
        new Array(response.data.questions.length).fill({
          answer: "",
          type: "text",
        })
      );

      if (response.data.questions.length === 0) {
        setQuestionsEnded(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location.state]);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      answers[currentQuestionIndex] = {
        answer: answerRef.current.value,
        type: "text",
      };
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentQuestionIndex === questions.length - 1) {
      // Check if it's the last question and set questionsEnded to true
      setQuestionsEnded(true);
      console.log(questionsEnded);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      answers[currentQuestionIndex] = {
        answer: answerRef.current.value,
        type: "text",
      };
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSaveAnswer = () => {
    answers[currentQuestionIndex] = {
      answer: answerRef.current.value,
      type: "text",
    };
  };

  const handleOptionChange = (option) => {
    answers[currentQuestionIndex] = {
      answer: option,
      type: "option",
    };
  };

  const handleFinish = () => {
    // You can add the logic here to handle finishing the questions.
    // For example, redirect to a "Thank You" page.
    navigate("/complaint");
  };

  const renderQuestion = () => {
    if (questionsEnded) {
      return (
        <div>
          <p>Do you want to add more symptoms or finish the questions?</p>
          <button className="button" onClick={handleFinish}>
            Add More Symptoms
          </button>
        </div>
      );
    } else {
      const question = questions[currentQuestionIndex];
      console.log(question);

      if (question) {
        return (
          <div className="question">
            <div className="question-title">{question.question}</div>
            <div className="question-options">
              <div>
                <label className="question-label">
                  <input
                    type="radio"
                    name="answer"
                    value="Yes"
                    onChange={() => handleOptionChange("Yes")}
                  />
                  Yes
                </label>
                <label className="question-label">
                  <input
                    type="radio"
                    name="answer"
                    value="No"
                    onChange={() => handleOptionChange("No")}
                  />
                  No
                </label>
              </div>
              <div>
                <p>If you have anything else to add?</p>
                <input
                  type="text"
                  ref={answerRef}
                  value={answers[currentQuestionIndex].answer}
                  onChange={handleSaveAnswer}
                  className="question-input"
                />
              </div>
            </div>
          </div>
        );
      } else {
        return <div>No more questions</div>;
      }
    }
  };

  // Call fetchData at the beginning of rendering
  if (questions.length === 0) {
    fetchData();
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        {renderQuestion()}
        <div className="button-container">
          {questionsEnded ? (
            <button className="button" onClick={handleFinish}>
              Finish
            </button>
          ) : (
            <>
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
                disabled={currentQuestionIndex === questions.length}
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestioningLayout;
