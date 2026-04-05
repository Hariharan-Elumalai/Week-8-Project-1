import React, { useState, useEffect } from 'react';
import RandomNumberGenerator from './Random';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // 🔥 Apply dark class to BODY
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="app-container">

      <div className="generator-card">

        <button
          className="toggle-btn inside"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <RandomNumberGenerator />

      </div>

    </div>
  );
}

export default App;