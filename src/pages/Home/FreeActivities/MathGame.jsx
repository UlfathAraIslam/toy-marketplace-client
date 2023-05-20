import React, { useState, useEffect } from 'react';

const MathGame = () => {
  const [count, setCount] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (count === 10) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [count, isRunning]);

  const handleStart = () => {
    setCount(1);
    setIsRunning(true);
  };

  const handleReset = () => {
    setCount(1);
    setIsRunning(false);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Let's count</h1>
      <p className="text-2xl">Count: {count}</p>
      {count === 10 && <p className="text-green-200 font-bold">Game Over!</p>}
      {!isRunning && (
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mt-4 rounded" onClick={handleStart}>
          Start
        </button>
      )}
      {isRunning && (
        <button className="bg-purple-300 hover:bg-purple-700 text-white font-bold py-2 px-4 mt-4 rounded" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default MathGame;


