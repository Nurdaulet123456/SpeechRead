import { useState, useEffect } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const useSpeech = () => {
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

  return {
    note,
    isListening,
    stop,
    start,
    handleListen,
  };
};

export default useSpeech;
