import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/home/Home.jsx';
import Form from './components/form/Form.jsx';
import ChiefComplaint from './components/chiefComplaint/ChiefComplaint.jsx';
// import QuestioningLayout from './components/questionGen/QuestioningLayout';
import QuestioningLayoutModified from './components/questionGen/QuestioningLayoutModified.jsx';
import Summary from './components/summary/Summary.jsx'

import FamilyHistory from './components/familyHistory/FamilyHistory.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/complaint" element={<ChiefComplaint />} />
          {/* <Route exact path="/questions" element={<QuestioningLayout />} /> */}
          <Route exact path="/questions" element={<QuestioningLayoutModified />} />
          <Route exact path="/familyHistory" element={<FamilyHistory />} />
          <Route exact path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
