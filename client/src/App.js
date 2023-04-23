import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/Home/home';
import Form from './components/Form/form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
