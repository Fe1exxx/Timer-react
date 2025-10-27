import { useState, useRef, useEffect } from 'react';

export default function MyApp() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(intervalId.current);
      setIsRunning(false);
    } else {
      intervalId.current = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000);
      setIsRunning(true);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  const resetTimer = () => {
    clearInterval(intervalId.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1 className="text-center text-6xl">React Timer</h1>
      <p className="text-center text-3xl mt-15">{time}</p>
      <div className="flex justify-center gap-3">
        <button onClick={toggleTimer} className="text-4xl border mt-15">
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={resetTimer} className="text-4xl border mt-15">Reset</button>
      </div>
    </div>
  );
}