import React, { useEffect, useState } from 'react';
import './styles/question.css';

function Question({ question, options }) {
  const [selectedOption, setSelectedOption] = useState(null);

  // Use the useEffect hook to reset selectedOption when a new question is passed
  useEffect(() => {
    setSelectedOption(null); // Reset selectedOption when question changes
  }, [question]);

  // Use another useEffect hook to reset selectedOption when new options are passed
  useEffect(() => {
    setSelectedOption(null); // Reset selectedOption when options change
  }, [options]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='question'>
      <h2 className='question'>{question}</h2>
      <ul className='question'>
        {options.map((option, index) => (
          <li key={index} className='question'>
            <label className='question'>
              <input
                className='question'
                type="radio"
                name="answer"
                value={option}
                onChange={handleChange}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <p>
        Selected option: {selectedOption}
      </p>
    </div>
  );
}

export default Question;
