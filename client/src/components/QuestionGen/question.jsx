import React from 'react';
import './styles/question.css';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  render() {
    const { question, options } = this.props;
    const { selectedOption } = this.state;

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
                  onChange={this.handleChange}
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
}

export default Question;