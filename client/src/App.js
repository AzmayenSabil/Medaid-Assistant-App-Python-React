import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/home/Home';
import Form from './components/form/Form';
import ChiefComplaint from './components/chiefComplaint/ChiefComplaint';
import Questions from './components/questionGen/Questions.jsx';
import FamilyHistory from './components/familyHistory/FamilyHistory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/complaint" element={<ChiefComplaint />} />
          <Route exact path="/questions" element={<Questions />} />
          <Route exact path="/familyHistory" element={<FamilyHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
