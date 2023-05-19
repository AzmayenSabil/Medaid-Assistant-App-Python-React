import React, { useState } from 'react';
import { useNavigate,  useLocation } from 'react-router-dom';
import Question from './question';
import questionsData from './questions.json';
import './styles/questions.css'

import Navbar from '../Navbar/navbar.jsx';

function Questions({ chiefComplaint }) {
  const location = useLocation();

  console.log("From useLocation state - complaint", location.state.chiefComplaint)
  const complaint = location.state.chiefComplaint || "Common cold";

  console.log("From questions", complaint)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswerChange = event => {
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
    // Do something with the answers here, e.g. send them to a server
    // probably the algorithm (DT)
    
    console.log(answers)
    // Navigate to ChiefComplaint component
    navigate('/complaint');
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

  let questions = getRelatedQuestions(complaint)
  console.log(questions[0].options)
  console.log(questions[0].questions)
  console.log(questions[0].questions.length)

  return (
    <div>
      <Navbar />
      <div className='questions card'>
        <h2 className='complaints'>Chief Complaints: {complaint}</h2>
        {questions[0].questions.length > 0 && currentQuestionIndex < questions[0].questions.length ? (
          <Question
            question={questions[0].questions[currentQuestionIndex]}
            options={questions[0].options}
            onChange={handleAnswerChange}
          />
        ) : (
          <div>
            <p className='completion'>Thank you for your answers!</p>
            <button onClick={handleFinishQuestions} className='completion-button'>Finish</button>
          </div>
        )}
        {/* {currentQuestionIndex < questions[0].questions.length && (
          <button onClick={handleNextQuestion} className='continue-button'>Next</button>
        )}
        {currentQuestionIndex > 0 && (
          <button onClick={handlePreviousQuestion} className='back-button'>Back</button>
        )} */}
        <div class="buttons">
          {currentQuestionIndex < questions[0].questions.length && (
            <button onClick={handleNextQuestion} className='continue-button'>Next</button>
          )}
          {currentQuestionIndex > 0 && (
            <button onClick={handlePreviousQuestion} className='back-button'>Back</button>
          )}
        </div>
      </div>
    </div>
    
  );
}

export default Questions;
