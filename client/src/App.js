import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/Home/home';
import Form from './components/Form/form';
import ChiefComplaint from './components/ChiefComplaint/chiefComplaint';
import Questions from './components/QuestionGen/questions.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/complaint" element={<ChiefComplaint />} />
          <Route exact path="/questions" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
