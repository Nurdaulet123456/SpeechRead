import React, { useState, useEffect } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "kk-KZ";

function SpeechText() {
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

  return (
    <div className="main">
      <div className="container">
        <h1>Voice Notes</h1>
        <div className="container">
          <div className="box">
            <h2>Current Note</h2>
            {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
            <button onClick={() => setIsListening((prevState) => !prevState)}>
              Start/Stop
            </button>
            <p style={{ display: isListening ? "none" : "block" }}>
              {`${((note.split(" ").length / 60) * 100).toFixed(0)}wpm`}
            </p>
            <p style={{ display: isListening ? "none" : "block" }}>
              {note.split(" ").length <= 1 ? '' : note.split(" ").length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeechText;
