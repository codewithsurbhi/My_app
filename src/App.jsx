import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Loginpage from './firstcomponent/Loginpage';
import Homepage from './firstcomponent/Homepage';
import Header from './firstcomponent/Header';
import About from './firstcomponent/About';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/header" element={<Header />} />
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App
