import React, { useState } from 'react';

function RandomNumberGenerator() {
  const [num, setNum] = useState(null);

  const generate = () => {
    setNum(Math.floor(Math.random() * 100));
  };

  const reset = () => {
    setNum(null);
  };

  return (
    <>
      <h2 className="title">Random Number Generator</h2>

      <div className="number-display">
        {num !== null ? (
          <span className="random-number">{num}</span>
        ) : (
          <p className="placeholder-text">Click generate</p>
        )}
      </div>

      <button className="btn generate-btn" onClick={generate}>
        Generate
      </button>

      <button 
        className="btn reset-btn" 
        onClick={reset} 
        disabled={num === null}
      >
        Reset
      </button>
    </>
  );
}

export default RandomNumberGenerator;