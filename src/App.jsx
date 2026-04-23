import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";


function App() {

  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');


  useEffect(() => {
  localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
  
  return (
    <div className={darkMode ? 'app dark-mode': 'app'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
        <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? 'Light' : 'Dark'}
            </button>
    </div>
  )
  };

export default App
