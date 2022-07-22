import { useState, useEffect } from "react";

const useActive = () => {
  const [ResultActive, setResultActive] = useState(false);
  const [KeyActive, setKeyActive] = useState(false);
  const [RecordingActive, setRecordingActive] = useState(false);

  useEffect(() => {
    setResultActive(true);
  }, []);

  const ResultActiveHandler = () => {
    setResultActive(true);
    setKeyActive(false);
    setRecordingActive(false);
  };

  const KeyActiveHandler = () => {
    setResultActive(false);
    setKeyActive(true);
    setRecordingActive(false);
  };

  const RecordingActiveHandler = () => {
    setResultActive(false);
    setKeyActive(false);
    setRecordingActive(true);
  };

  return {
    ResultActiveHandler,
    KeyActiveHandler,
    RecordingActiveHandler,
    ResultActive,
    KeyActive,
    RecordingActive,
  };
};

export default useActive;
