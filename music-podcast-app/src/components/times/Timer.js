import React from 'react';

const TimerClock = ({ isOpen }) => {

    if (!isOpen) return null

  return (
    <div className="times">
          <div className="timer__block">
            <div className="block clock">00</div>
            <span>:</span>
            <div className="block minute">00</div>
            <span>:</span>
            <div className="block second">00</div>
          </div>

          <div className="text__center">
          <button className="btn times__btn">Start</button>
          <button className="btn times__btn">Stop</button>
          </div>
        </div>
  );
}

export default TimerClock;
