import React, { useState, useEffect } from "react";
import TimerComponent from "./timerCompanent/TimerCompantent";
import InputComponent from "./inputCompanent/InputCompanent";
import "./Times.css";

// ! Speech to text
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "kk-KZ";

const CountdownComponent = ({ isOpen }) => {
  const [isTimerRunning, setTimerRunning] = useState(false);

  // ! Speech Time
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {};
    }

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      setNote(transcript);
    };
  };

  const start = () => {
    setIsListening(true);
  };

  const stop = () => {
    setIsListening(false);
  };

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
          stopSpeech={stop}
          listen={isListening}
          isNote={note}
        />
      ) : (
        <InputComponent
          startCountdown={startCountdown}
          handleListening={handleListen}
          startSpeech={start}
        />
      )}
    </>
  );
};
export default CountdownComponent;
