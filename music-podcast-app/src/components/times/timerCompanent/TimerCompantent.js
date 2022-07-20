import React, { useState, useEffect } from "react";
import axios from 'axios';
import useResult from "../../hooks/useResult";


let timeOutId = 0;
const TimerComponent = ({ timerData, stop, open, note, stopCountdown}) => {
  const [countdownTime, setCountdownTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [error, setError] = useState('');
  
// !
// ? Result, using Backend

  const {w, p, r} = useResult(note)

  let result = {
    words: w,
    page: p,
    racer: r,
    date: new Date().toDateString().split(' ').slice(1,3).join(' '),
  }


  const handleSubmitResult = async () => {
    try {
      const url = 'http://localhost:8080/api/addresult'
      const {data: res} = await axios.post(url, result)
      console.log(res);
    } catch (error) {
      if (error.response && 
        error.response.status >= 400 &&
        error.response.status <= 500) {
          setError(error.response.data.message)
        }
    }
  }

 // ! 

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

  // useEffect(() => {
  //   if (
  //     timeLeft.hours === 0 &&
  //     timeLeft.minutes === 0 &&
  //     timeLeft.seconds === 0
  //   ) {
  //     audio.current.play();
  //     clearTimeout(timeOutId);
  //   } else {
  //     audio?.current?.load();
  //   }

  //   return () => clearTimeout(timeOutId);
  // }, [timeLeft]);

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
        <button
          className="button times__btn"
        >
          Start
        </button>

        <button
          className="button times__btn"
          onClick={stopTimer}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default TimerComponent;
