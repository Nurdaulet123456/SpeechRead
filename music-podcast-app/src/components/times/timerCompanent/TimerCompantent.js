import React, { useState, useEffect } from "react";
import Servers from "../../../servers/Servers";
import useResult from "../../../helper/Result";

let timeOutId = 0;
let user = JSON.parse(localStorage.getItem("user-info"));

const {createResultAndKeys} = Servers()
const TimerComponent = ({ timerData, stop, open, note, stopCountdown }) => {
  const [countdownTime, setCountdownTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // ! Result, Record using Backend

  const { w, p, r } = useResult(note);

  let result = {
    user_id: user && user._id,
    words: w,
    page: p,
    racer: r,
    date: new Date().toDateString().split(" ").slice(1, 3).join(" "),
  };

  let record = {
    user_id: user && user._id,
    record: w
  };

  const handleSubmitResult = async () => {
      createResultAndKeys('http://localhost:8080/api/result', result)
      createResultAndKeys('http://localhost:8080/api/records', record)
  };

  // ! Calculate Timer
  
  const calculateTimeLeft = () => {
    let currDate = new Date().getTime();
    let difference = countdownTime - currDate;
    let timeDiff = {
      hours:
        difference > 0 ? Math.floor((difference / (1000 * 60 * 60)) % 24) : 0,
      minutes: difference > 0 ? Math.floor((difference / 1000 / 60) % 60) : 0,
      seconds: difference > 0 ? Math.floor((difference / 1000) % 60) : 0,
    };
    timeDiff.hours =
      timeDiff.hours < 10 ? `0${timeDiff.hours}` : `${timeDiff.hours}`;
    timeDiff.minutes =
      timeDiff.minutes < 10 ? `0${timeDiff.minutes}` : `${timeDiff.minutes}`;
    timeDiff.seconds =
      timeDiff.seconds < 10 ? `0${timeDiff.seconds}` : `${timeDiff.seconds}`;
    return timeDiff;
  };

  const stopTimer = () => {
    if (timeOutId > 0) {
      clearTimeout(timeOutId);
    }
    stopCountdown();
    stop();
    open();
    handleSubmitResult();
  };

  useEffect(() => {
    let expectedTime = new Date().getTime();
    let { hours, minutes, seconds } = timerData;
    expectedTime += hours > 0 ? hours * 3600000 : 0;
    expectedTime += minutes > 0 ? minutes * 60000 : 0;
    expectedTime += seconds > 0 ? seconds * 1000 : 0;
    setCountdownTime(expectedTime);
    return () => {
      expectedTime = 0;
    };
  }, [timerData]);

  useEffect(() => {
    if (countdownTime > new Date().getTime()) {
      timeOutId = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    }
    return () => {
      clearTimeout(timeOutId);
    };
  });

  return (
    <div className="times">
      <div className="timer__block">
        <div className="down">
          <label className="block clock">{timeLeft.hours}</label>
        </div>

        <span>:</span>

        <div className="down">
          <label className="block clock">{timeLeft.minutes}</label>
        </div>

        <span>:</span>

        <div className="down">
          <label className="block clock">{timeLeft.seconds}</label>
        </div>
      </div>

      <div className="text__center">
        <button className="button times__btn">Start</button>

        <button className="button times__btn" onClick={stopTimer}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default TimerComponent;
