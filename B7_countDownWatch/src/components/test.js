import React, { useState, useEffect } from 'react';

function Countdown() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const startCountdown = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIntervalId(setInterval(() => {
      setCount(count => count + 1);
    }, 1000));
  };

  const stopCountdown = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div>
      <h1>{count}</h1>
      {intervalId ? (
        <button onClick={stopCountdown}>Stop</button>
      ) : (
        <button onClick={startCountdown}>Start</button>
      )}
    </div>
  );
}
