import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home';
import AboutSection from './components/about';
import MyNavbar from './components/navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Routes> 
        <Route exact path="/" element={ <Home/> } />
        <Route path="/about" element={ <AboutSection/> } />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
