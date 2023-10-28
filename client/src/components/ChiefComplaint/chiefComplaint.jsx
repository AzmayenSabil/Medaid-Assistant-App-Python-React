import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./chiefComplaint.css";

import Navbar from "../navbar/Navbar.jsx";

function ChiefComplaint() {
  const location = useLocation();

  console.log(location.state);

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [complaints, setComplaints] = useState([]);
  const symptoms = [
    "ChestPain",
    "Shortness of Breath",
    "Palpitations",
    "Dizziness",
    "Swelling in the Legs",
    "Leg Pain",
    // ----
    "Headache",
    "Back Pain",
    "Cough",
    "Fever",
    "Sore Throat",
    "Fatigue",
    "Body aches",
    //------
  ];

  const navigate = useNavigate();

  useEffect(() => {
    setSuggestions(symptoms);
  }, []);

  useEffect(() => {
    console.log("Complaints:", complaints);
  }, [complaints]);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    if (inputValue === "") {
      // Reset suggestions when input is empty
      setSuggestions(symptoms);
    } else {
      // Filter suggestions based on input value
      const filteredSuggestions = symptoms.filter(
        (suggestion) =>
          suggestion.toLowerCase().includes(inputValue.toLowerCase()) // Compare word to word
      );
      if (filteredSuggestions.length === 0) {
        // If no results found, add input value to suggestions
        filteredSuggestions.push(inputValue);
      }
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setValue(suggestion);
    setSuggestions(symptoms);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Chief Complaint:', value);

    setComplaints([...complaints, value]);
    setValue("");
    setSubmitted(true);

    navigate("/questions", {
      state: {
        chiefComplaint: value,
      },
    });
  };

  return (
    <div>
      <Navbar />
      <div className="ChiefComplaint card">
        <h1>What's Your Chief Complaint ?</h1>
        {submitted ? (
          console.log("submitted complaint")
        ) : (
          <form className="form-cc" onSubmit={handleSubmit}>
            <div className="form-group-cc">
              <label htmlFor="chief-complaint" className="label-cc">
                Chief Complaint
              </label>
              <input
                type="text"
                id="chief-complaint"
                name="chief-complaint"
                value={value}
                onChange={handleChange}
                className="input-cc"
              />
              <br></br>
              {suggestions.length > 0 ? (
                <ul className="suggestions">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion}
                      onClick={() => handleSelectSuggestion(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No results found</p>
              )}
            </div>
            <button type="submit" className="button-cc">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ChiefComplaint;
