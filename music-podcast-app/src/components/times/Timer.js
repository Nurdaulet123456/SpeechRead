import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'

const TimerClock = ({ isOpen }) => {

    if (!isOpen) return null

  return (
    <div className="times">
          <div className="timer__block">
            <div className="block clock">
              00
            </div>
            <span>:</span>
            <div className="block minute">
              00
            </div>
            <span>:</span>
            <div className="block second">
              00
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
  );
}

export default TimerClock;
