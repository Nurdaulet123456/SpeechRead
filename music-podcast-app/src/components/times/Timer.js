import React, { useState } from "react";
import TimerComponent from "./timerCompanent/TimerCompantent";
import InputComponent from "./inputCompanent/InputCompanent";
import "./Times.css";
const CountdownComponent = ({ isOpen }) => {
  const [isTimerRunning, setTimerRunning] = useState(false);
  const timerValue = {
    hours: "00",
    minutes: "00",
    seconds: "00",
  };
  const startCountdown = (timerData) => {
    setTimer(timerData);
    setTimerRunning(!isTimerRunning);
  };
  const stopCountdown = () => {
    setTimer(timerValue);
    setTimerRunning(!isTimerRunning);
  };
  const [timer, setTimer] = useState(timerValue);

  if (!isOpen) return null;
  return (
    <>
      {isTimerRunning ? (
        <TimerComponent timerData={timer} stopCountdown={stopCountdown} />
      ) : (
        <InputComponent startCountdown={startCountdown} />
      )}
    </>
  );
};
export default CountdownComponent;
