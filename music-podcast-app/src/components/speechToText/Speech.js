import React, { useState, useEffect } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "KZ";

function Speech() {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

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
      mic.onend = () => {
      };
    }

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      setNote(transcript);
    };
  };

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note]);
    setNote("");
  };

  return (
    <div className="main">
      <div className="container">
        <h1>Voice Notes</h1>
        <div className="container">
          <div className="box">
            <h2>Current Note</h2>
            {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
            <button onClick={handleSaveNote} disabled={!note}>
              Save Note
            </button>
            <button onClick={() => setIsListening((prevState) => !prevState)}>
              Start/Stop
            </button>
            <p style={{display: isListening ? 'none' : 'block'}}>{note}</p>
          </div>
          <div className="box">
            <h2>Notes</h2>
            {savedNotes.map((n) => (
              <p key={n}>{n}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speech;
