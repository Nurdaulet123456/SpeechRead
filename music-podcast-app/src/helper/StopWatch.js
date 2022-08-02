import { useState, useEffect } from "react";

const useStopWatch = (handleListening, startSpeech, stopSpeech) => {
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
      stopSpeech();
    }

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  return {
    timer,
    setRunning,
    setTimer,
  };
};

export default useStopWatch;
