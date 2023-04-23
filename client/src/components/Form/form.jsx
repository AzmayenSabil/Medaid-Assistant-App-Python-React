import React, { useState } from 'react';
import './form.css';

import Navbar from '../Navbar/navbar.jsx';

function Form() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [race, setRace] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Gender:', gender);
    console.log('Age:', age);
    console.log('Race:', race);
  };

  return (
    <div>
        <Navbar />
        <div className="Form">
            <h1>Basic Information</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" >Name:</label>
                    <input type="text" id="name" name="name" placeholder={"Type your name"} value={name} onChange={(event) => setName(event.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" value={gender} onChange={(event) => setGender(event.target.value)} required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" min="0" max="120" placeholder={20} value={age} onChange={(event) => setAge(event.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="race">Race:</label>
                    <select id="race" name="race" value={race} onChange={(event) => setRace(event.target.value)} required>
                        <option value="">Select Race</option>
                        <option value="asian">Asian</option>
                        <option value="black">Black</option>
                        <option value="hispanic">Hispanic</option>
                        <option value="white">White</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  );
}

export default Form;
