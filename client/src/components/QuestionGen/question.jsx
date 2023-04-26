import React from 'react';

function Question({ question, options, onChange }) {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input type="radio" name="answer" value={option} onChange={onChange} />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
