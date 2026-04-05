import React, { useState } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1 className="title">Counter Application</h1>

        <p className="count-value">{count}</p>

        <div className="button-row">
          <button className="btn" onClick={handleIncrement}>
            Increment
          </button>
          <button className="btn" onClick={handleDecrement} disabled={count === 0}>
            Decrement
          </button>
          <button className="btn reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>

        {count === 0 && <p className="message">Minimum limit reached</p>}

        <p className="credit-text">
          Project by{' '}
          <a
            className="credit-link"
            href="https://github.com/Vixcy300"
            target="_blank"
            rel="noreferrer"
          >
            vignesh
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;