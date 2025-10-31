import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Loginpage from './firstcomponent/Loginpage';
import Homepage from './firstcomponent/Homepage';
import Header from './firstcomponent/Header';
import './App.css'

function App() {
  
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/header" element={<Header />} />
          <Route path="/Loginpage" element={<Loginpage />} />
      </Routes>
    </Router>
  );
}

export default App
