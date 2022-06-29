import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StopWatchClock = ({ timerIsOpen }) => {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 10);
      }, 5);
    } else if (!running) {
      clearInterval(interval);
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
          <motion.button
            className="btn times__btn"
            onClick={() => setRunning(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Start
          </motion.button>
          <motion.button
            className="btn times__btn"
            onClick={() => setRunning(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Stop
          </motion.button>
          <motion.button
            className="btn times__btn"
            onClick={() => setTimer(0)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Reset
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default StopWatchClock;
