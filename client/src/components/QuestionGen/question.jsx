import React from 'react';
import './styles/question.css'

function Question({ question, options, onChange }) {
  return (
    <div className='question'>
      <h2 className='question'>{question}</h2>
      <ul className='question'>
        {options.map((option, index) => (
          <li key={index} className='question'>
            <label className='question'>
              <input className='question' type="radio" name="answer" value={option} onChange={onChange} />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
