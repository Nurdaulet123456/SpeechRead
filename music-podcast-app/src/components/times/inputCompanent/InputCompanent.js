import React, { useState } from "react";

const InputComponent = (props) => {
  const {handle, start} = props;
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const startTimer = () => {
    props.startCountdown({
      hours,
      minutes,
      seconds,
    });

    start();
    handle();
  };
  return (
    <div className="times">
      <div className="timer__block">
        <div className="down">
          <input
            type="number"
            className="block clock"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>

        <span>:</span>

        <div className="down">
          <input
            type="number"
            className="block clock"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          />
        </div>

        <span>:</span>

        <div className="down">
          <input
            type="number"
            className="block clock"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
          />
        </div>
      </div>

      <div className="text__center">
        <button
          className="btn times__btn"
          onClick={startTimer}
        >
          Start
        </button>

        <button
          className="btn times__btn"
        >
          Stop
        </button>
      </div>
    </div>
  );
};
export default InputComponent;
