import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

let timeOutId = 0;
const TimerComponent = (props) => {
  const { timerData } = props;
  const [countdownTime, setCountdownTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const calculateTimeLeft = () => {
    let currDate = new Date().getTime();
    let difference = countdownTime - currDate;
    let timeDiff = {
      hours:
        difference > 0 ? Math.floor((difference / (1000 * 60 * 60)) % 24) : 0,
      minutes: difference > 0 ? Math.floor((difference / 1000 / 60) % 60) : 0,
      seconds: difference > 0 ? Math.floor((difference / 1000) % 60) : 0,
    };
    timeDiff.hours =
      timeDiff.hours < 10 ? `0${timeDiff.hours}` : `${timeDiff.hours}`;
    timeDiff.minutes =
      timeDiff.minutes < 10 ? `0${timeDiff.minutes}` : `${timeDiff.minutes}`;
    timeDiff.seconds =
      timeDiff.seconds < 10 ? `0${timeDiff.seconds}` : `${timeDiff.seconds}`;
    return timeDiff;
  };

  const stopTimer = () => {
    if (timeOutId > 0) {
      clearTimeout(timeOutId);
    }
    props.stopCountdown();
  };
  useEffect(() => {
    let expectedTime = new Date().getTime();
    let { hours, minutes, seconds } = timerData;
    expectedTime += hours > 0 ? hours * 3600000 : 0;
    expectedTime += minutes > 0 ? minutes * 60000 : 0;
    expectedTime += seconds > 0 ? seconds * 1000 : 0;
    setCountdownTime(expectedTime);
    return () => {
      expectedTime = 0;
    };
  }, [timerData]);

  useEffect(() => {
    if (countdownTime > new Date().getTime()) {
      timeOutId = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    }
    return () => {
      clearTimeout(timeOutId);
    };
  });

  return (
    <div className="times">
      <div className="timer__block">
        <div className="down">
          <label className="block clock">{timeLeft.hours}</label>
        </div>

        <span>:</span>

        <div className="down">
          <label className="block clock">{timeLeft.minutes}</label>
        </div>

        <span>:</span>

        <div className="down">
          <label className="block clock">{timeLeft.seconds}</label>
        </div>
      </div>

      <div className="text__center">
        <motion.button
          className="btn times__btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start
        </motion.button>

        <motion.button
          className="btn times__btn"
          onClick={stopTimer}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Stop
        </motion.button>
      </div>
    </div>
  );
};

export default TimerComponent;
