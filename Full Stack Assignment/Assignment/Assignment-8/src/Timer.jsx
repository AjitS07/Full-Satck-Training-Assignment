import React, { useState, useEffect } from 'react';

function Timer({ start=30 }) {
  const [time, setTime] = useState(start);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const handleReset = () => {
    setTime(start);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <p>Current Time: {time} seconds</p>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Timer;
