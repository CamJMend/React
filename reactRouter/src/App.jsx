//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import CreditCardValidation from "./pages/validation";
import WordList from "./pages/words";
import WeatherApp from "./pages/weather";
import Default from "./pages/Default";

function App() {

  return (
    <div className="app">
    <Router>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/validation" element={<CreditCardValidation />} />
            <Route path="/words" element={<WordList />} />
            <Route path="/weather" element={<WeatherApp />} />
            <Route path="*" element={<Default />} />
          </Routes>
        </div>
    </Router>
    </div>
  )
}

export default App
