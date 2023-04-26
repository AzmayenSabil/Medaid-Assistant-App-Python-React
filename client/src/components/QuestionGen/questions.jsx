import React, { useState, useEffect } from 'react';
import Question from './question';

function Questions({ chiefComplaint }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetch('/questions.json')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  const handleAnswerChange = event => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      <h2>Chief Complaint: {chiefComplaint}</h2>
      {questions.length > 0 && currentQuestionIndex < questions.length ? (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onChange={handleAnswerChange}
        />
      ) : (
        <p>Thank you for your answers!</p>
      )}
      {currentQuestionIndex < questions.length && (
        <button onClick={handleNextQuestion}>Next</button>
      )}
    </div>
  );
}

export default Questions;
