import React from 'react';

const styleBtnStart = {
    marginRight: '50px',
}

const StopWatchClock = ({ timerIsOpen }) => {
    if (!timerIsOpen) return null
  return (
    <div>
      <div className="times">
          <div className="timer__block">
            <div className="block minute">00</div>
            <span>:</span>
            <div className="block second">00</div>
          </div>

          <div className="text__center">
          <button className="btn times__btn" style={styleBtnStart}>Start</button>
          <button className="btn times__btn">Stop</button>
          </div>
        </div>
    </div>
  );
}

export default StopWatchClock;