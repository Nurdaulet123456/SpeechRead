import React, { useState } from "react";
import TimerComponent from "./timerCompanent/TimerCompantent";
import InputComponent from "./inputCompanent/InputCompanent";
import "./Times.css";

// ! Speech to text

const CountdownComponent = (props) => {
  const {isOpen, stopSpeech, listen, isNote, handleListening, startSpeech} = props;
  const [isTimerRunning, setTimerRunning] = useState(false);

  // ! Timer time

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
        <TimerComponent
          timerData={timer}
          stopCountdown={stopCountdown}
          stop={stopSpeech}
          note={isNote}
        />
      ) : (
        <InputComponent
          startCountdown={startCountdown}
          handle={handleListening}
          start={startSpeech}
        />
      )}
    </>
  );
};
export default CountdownComponent;
