import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/home/Home';
import Form from './components/form/Form';
import ChiefComplaint from './components/chiefComplaint/ChiefComplaint';
import QuestioningLayout from './components/questionGen/QuestioningLayout';

import FamilyHistory from './components/familyHistory/FamilyHistory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/complaint" element={<ChiefComplaint />} />
          <Route exact path="/questions" element={<QuestioningLayout />} />
          <Route exact path="/familyHistory" element={<FamilyHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
