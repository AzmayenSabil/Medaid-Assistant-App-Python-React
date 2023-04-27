import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './question';
import questionsData from './questions.json';
import './styles/questions.css'

import Navbar from '../Navbar/navbar.jsx';

function Questions({ chiefComplaint }) {
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

  const handleFinishQuestions = () => {
    // Do something with the answers here, e.g. send them to a server

    // Navigate to ChiefComplaint component
    navigate('/complaint');
  };

  return (
    <div>
      <Navbar />
      <div className='questions card'>
        <h2 className='questions'>Chief Complaint: {chiefComplaint}</h2>
        {questionsData.length > 0 && currentQuestionIndex < questionsData.length ? (
          <Question
            question={questionsData[currentQuestionIndex].question}
            options={questionsData[currentQuestionIndex].options}
            onChange={handleAnswerChange}
          />
        ) : (
          <div>
            <p className='questions'>Thank you for your answers!</p>
            <button onClick={handleFinishQuestions} className='questions'>Finish</button>
          </div>
        )}
        {currentQuestionIndex < questionsData.length && (
          <button onClick={handleNextQuestion} className='questions'>Next</button>
        )}
      </div>
    </div>
    
  );
}

export default Questions;
