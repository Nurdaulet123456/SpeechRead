import React, { useState, useEffect } from "react";
import Game from "../Game/Game";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "kk-KZ";

const Speech = () => {
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

  return (
    <>
      <Game
        stopSpeech={stop}
        listen={isListening}
        isNote={note}
        handleListening={handleListen}
        startSpeech={start}
      />
    </>
  );
};

export default Speech;
