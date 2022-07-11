import { useState, useEffect } from "react";
const StopWatchClock = (props) => {
  const { 
  timerIsOpen,
  stopSpeech,
  isNote,
  handleListening,
  startSpeech} = props

  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 10);
      }, 5);
      handleListening();
      startSpeech();
    } else if (!running) {
      clearInterval(interval);
      stopSpeech()
    }

    return () => clearInterval(interval);
  }, [running]);

  if (!timerIsOpen) return null;
  return (
    <div>
      <div className="times">
        <div className="timer__block">
          <div className="block clock">
            {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}
          </div>
          <span>:</span>
          <div className="block minute">
            {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}
          </div>
          <span>:</span>
          <div className="block second">
            {("0" + Math.floor((timer / 100) % 10)).slice(-2)}
          </div>
        </div>

        <div className="text__center">
          <button
            className="btn times__btn"
            onClick={() => setRunning(true)}
          >
            Start
          </button>
          <button
            className="btn times__btn"
            onClick={() => setRunning(false)}
          >
            Stop
          </button>
          <button
            className="btn times__btn"
            onClick={() => setTimer(0)}
          >
            Reset
          </button>
        </div>
        <p>{isNote}</p>
      </div>
    </div>
  );
};

export default StopWatchClock;
