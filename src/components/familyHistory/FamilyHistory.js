import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar.js";

import "./familyHistory.css";

function FamilyHistory({ info }) {
  const location = useLocation();
  const previousState = location.state.info;

  const [searchTerm, setSearchTerm] = useState("");
  const [familyHistoryOptions] = useState([
    "Asthma",
    "Eczema",
    "Allergy",
    "Cataract",
    "Migraine",
    "Rheumatoid Arthritis",
    "Lupus",
    "Diabetes",
    "High Blood Pressure",
    "High Cholesterol",
    "Familial Hypercholesterolemia (Genetic Disorder)",
    "Crohn's Disease",
    "Ulcerative Colitis",
    "Ear Issues",
    "Stroke",
    "Hormone Problems",
    "Depression",
    "Digestive Problems",
    "Celiac Disease",
    "Liver Disease",
    "Bleeding/Clotting Disorder",
    "Deep Vein Thrombosis (DVT) or Pulmonary Embolism (PE)",
    "Cancer",
    "Lung Conditions",
    "Heart Conditions",
  ]);

  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedHistory, setSelectedHistory] = useState([]); // Use an array to store selected options
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredOptions(familyHistoryOptions);
  }, [familyHistoryOptions]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter family history options based on the search term
    const filtered = familyHistoryOptions.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredOptions(filtered);
  };

  const handleSelectFamilyHistory = (selectedOption) => {
    // console.log(selectedOption);
    // Check if the option is already selected
    if (selectedHistory.includes(selectedOption)) {
      // If selected, remove it from the array
      setSelectedHistory((prevSelected) =>
        prevSelected.filter((option) => option !== selectedOption)
      );
      setSearchTerm((prevSelected) =>
        prevSelected.filter((option) => option !== selectedOption)
      );
    } else {
      // If not selected, add it to the array
      setSelectedHistory((prevSelected) => [...prevSelected, selectedOption]);
      setSearchTerm((prevSelected) => [...prevSelected, selectedOption]);
    }
  };

  // Function to continue to the "chiefComplaint" component
  const continueToChiefComplaint = () => {
    // Create an object to store the state of the previous component
    const basicInfo = {
      name: previousState.name,
      gender: previousState.gender,
      age: previousState.age,
      race: previousState.race,
    };

    navigate("/complaint", {
      state: {
        // Pass the values from the current component and the previous component
        familyHistory: selectedHistory, // Now it's an array of selected values
        previousState: basicInfo,
      },
    });
  };

  return (
    <div>
      <Navbar />
      <div className="family-history card">
        <label htmlFor="family-history" className="label">
          Select Family History (If any):
        </label>
        <input
          type="text"
          id="family-history"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search Family History"
          className="input"
        />

        <div className="filtered-options">
          {filteredOptions.length > 0 && (
            <ul className="no-bullets">
              {filteredOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => handleSelectFamilyHistory(option)}
                  className={selectedHistory.includes(option) ? "selected" : ""}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          onClick={continueToChiefComplaint}
          className="continue-button"
          type="submit"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default FamilyHistory;
