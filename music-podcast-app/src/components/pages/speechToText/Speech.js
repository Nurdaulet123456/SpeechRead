import React from "react";
import Game from "../../Game/Game";
import { Helmet } from "react-helmet";
import useSpeech from "../../hooks/useSpeech";

const Speech = () => {
  const { start, stop, handleListen, note, isListening } = useSpeech();

  return (
    <>
      <Helmet>
        <title>Game</title>
      </Helmet>
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
