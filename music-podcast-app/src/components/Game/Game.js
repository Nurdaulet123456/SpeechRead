// TODO: CSS
import "../../index.css";
import "./Game.css";

// TODO: import othre files
import { useState, useEffect } from "react";
import TimerClock from '../times/Timer'
import StopWatchClock from "../times/Stop.Watch";
import CollectModals from "../childrenModalsWindow/CollectModals";

const Game = (props) => {
  const { stopSpeech, listen, isNote, handleListening, startSpeech } = props;
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [timerOpen, setTimerOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const hangleOpenTimerBlock = () => {
    setOpen(true);
    setTimerOpen(false);
  };

  const hangleOpenStopWatchTimerBlock = () => {
    setTimerOpen(true);
    setOpen(false);
  };

  const handleResultOpen = () => {
    setIsOpen(true);
  };

  const handleResultClose = () => {
    setIsOpen(false);
  }
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="game">
            <div className="timer">
              <button onClick={hangleOpenTimerBlock} className='btn'>
                <h1 className={`timer__title ${!open ? '' : 'timer__btn'}`}>Timer</h1>
              </button>
            </div>

            <div className="stop__watch">
              <button onClick={hangleOpenStopWatchTimerBlock} className='btn'>
                <h1 className={`stop__watch-title ${!timerOpen ? '' : 'timer__btn'}`}>StopWatch</h1>
              </button>
            </div>
          </div>
          <TimerClock
            isOpen={open}
            stopSpeech={stopSpeech}
            listen={listen}
            isNote={isNote}
            handleListening={handleListening}
            startSpeech={startSpeech}
            isResultOpen={handleResultOpen}
            />
          <StopWatchClock
            timerIsOpen={timerOpen}
            stopSpeech={stopSpeech}
            listen={listen}
            isRes={isNote}
            handleListening={handleListening}
            startSpeech={startSpeech}
            isStopWatchResultOpen={handleResultOpen}
            />
        </div>
      </div>

      <CollectModals
        resultOpen={isOpen}
        setResultOpen={setIsOpen}
        note={isNote}
        isClose={handleResultClose}
      />
    </>
  );
};

export default Game;
