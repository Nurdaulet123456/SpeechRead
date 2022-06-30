// ? CSS files
import "./Times.css";

// ? Import other files
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ArrowUpandDown from "../../images/icons/arrowUp.svg";

const TimerClock = ({ isOpen }) => {
  // ! SOS useStates

  const [sessionLength, setSessionLength] = useState(1500);
  const [breakLength, setBreakLength] = useState(300);
  const [timer, setTimer] = useState(1500);
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [timerIntervalId, setTimerIntervalId] = useState(null);
  const [isSession, setIsSession] = useState(false);
  const [isSessionType, setIsSessionType] = useState("Session");
  const timerAudio = useRef();
  let started = timerIntervalId !== null;

  // UssEffect play audio

  useEffect(() => {
    if (timer === 0) {
      timerAudio.current.play();

      if (isSessionType === "Session") {
        setIsSessionType("Break");
        setTimer(breakLength);
      } else {
        setIsSessionType("Session");
        setTimer(sessionLength);
      }
    }
  }, [timer, isSessionType]);

  // useEffect setTimer

  useEffect(() => {
    setTimer(sessionLength);
  }, [sessionLength]);

  // useEffect times (type of minutes and seconds)

  useEffect(() => {
    let time = secondToTime(timer);

    setTimerMinutes(time[0]);
    setTimerSeconds(time[1]);
  }, [timer]);

  // Toggle Down

  function toggleDown() {
    if (started) {
      if (timerIntervalId) {
        clearInterval(timerIntervalId);
      }
      setTimerIntervalId(null);
    } else {
      const intervalId = setInterval(() => {
        setTimer((prev) => {
          let newTime = prev - 1;

          let second = secondToTime(newTime);

          setTimerMinutes(second[0]);
          setTimerSeconds(second[1]);

          return newTime;
        });
      }, 1000);

      setTimerIntervalId(intervalId);
    }
  }

  // Seconds Time help with we can calculated seconds and minutes

  function secondToTime(second) {
    return [Math.floor(second / 60), second % 60];
  }

  // Format minutes and seconds

  function formatTypeTime(time) {
    if (time < 10) {
      return `0${time}`;
    } else {
      return time;
    }
  }

  // Break Length

  function hangleBreakLength(e) {
    if (started) return;

    if (e.target.id === "break-decrement" && breakLength > 60) {
      setBreakLength((prev) => prev - 60);
    } else if (e.target.id === "break-increment" && breakLength < 3500) {
      setBreakLength((prev) => prev + 60);
    }
  }

  // Session Length (Length on timers)

  function hangleSessionLength(e) {
    if (started) return;

    if (e.target.id === "session-decrement" && sessionLength > 60) {
      setSessionLength((prevVal) => prevVal - 60);
    } else if (e.target.id === "session-increment" && sessionLength < 3500) {
      setSessionLength((prevVal) => prevVal + 60);
    }
  }

  // Timer

  function hangleTimer() {
    timerAudio?.current?.load();

    if (timerIntervalId) {
      clearInterval(timerIntervalId);
    }

    setTimerIntervalId(null);
    setSessionLength(1500);
    setBreakLength(300);
    setIsSessionType("Session");
    setTimer(1500);
  }

  if (!isOpen) return null;

  return (
    <div className="times">
      <div className="timer__block">
        <div className="down">
          <img className="btn__change up" src={ArrowUpandDown} alt="arrow up" />
          <div className="block clock">00</div>
          <img
            className="btn__change downs"
            src={ArrowUpandDown}
            alt="arrow up"
          />
        </div>

        <span>:</span>

        <div className="down">
          <img className="btn__change up" src={ArrowUpandDown} alt="arrow up" />
          <div className="block minute">00</div>
          <img
            className="btn__change downs"
            src={ArrowUpandDown}
            alt="arrow up"
          />
        </div>

        <span>:</span>

        <div className="down">
          <img className="btn__change up" src={ArrowUpandDown} alt="arrow up" />
          <div className="block second">00</div>
          <img
            className="btn__change downs"
            src={ArrowUpandDown}
            alt="arrow up"
          />
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Stop
        </motion.button>

        <motion.button
          className="btn times__btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setTimer(0)}
        >
          Reset
        </motion.button>
      </div>
    </div>
  );
};

export default TimerClock;
