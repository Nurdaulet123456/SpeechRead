import React, { useState } from "react";
import { motion } from "framer-motion";

const InputComponent = (props) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const startTimer = () => {
    props.startCountdown({
      hours,
      minutes,
      seconds,
    });
  };
  return (
    <div className="times">
      <div className="timer__block">
        <div className="down">
          <input
            type="number"
            className="block clock"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>

        <span>:</span>

        <div className="down">
          <input
            type="number"
            className="block clock"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          />
        </div>

        <span>:</span>

        <div className="down">
          <input
            type="number"
            className="block clock"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
          />
        </div>
      </div>

      <div className="text__center">
        <motion.button
          className="btn times__btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={startTimer}
        >
          Start
        </motion.button>

        <motion.button
          className="btn times__btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Stop
        </motion.button>
      </div>
    </div>
  );
};
export default InputComponent;
