import { useState, useEffect } from 'react';
import TimerInput from './components/TimerInput';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const startTimer = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setTimeLeft(totalSeconds);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearTimeout(timer);
  }, [isRunning, timeLeft]);

  return (
    <div>
      <h1>Timer</h1>
      <TimerInput
        hours={hours} minutes={minutes} seconds={seconds}
        setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds}
      />
      <TimerDisplay timeLeft={timeLeft} />
      <TimerControls startTimer={startTimer} stopTimer={stopTimer} isRunning={isRunning} />
    </div>
  );
}

export default App;
