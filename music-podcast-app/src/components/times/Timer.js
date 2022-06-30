import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'

const TimerClock = ({ isOpen }) => {

  const [sessionLength, setSessionLength] = useState(1500);
  const [timer, setTimer] = useState(1500);
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const [timerIntervalId, setTimerIntervalId] = useState(null)
  const [isSession, setIsSession] = useState(false)
  const [isSessionType, setIsSessionType] = useState('Session')
  const timerAudio = useRef();
  let started = timerIntervalId !== null
  

  useEffect(() => {
    if (timer === 0) {
      timerAudio.current.play();

      if (isSessionType === 'Session') {
        setIsSessionType('Break');
      } else {
        setIsSessionType('Session');
        setTimer(sessionLength);
      }
    }
  }, [timer, isSessionType])


  useEffect(() => {
    setTimer(sessionLength)
  }, [sessionLength])

  
  useEffect(() => {
    let time = secondToTime(timer)

    setTimerMinutes(time[0])
    setTimerSeconds(time[1])
  }, [timer])

  function toggleDown() {
    if (started) {
      if (timerIntervalId) {
        clearInterval(timerIntervalId)
      }
      setTimerIntervalId(null)
    } else {
      const intervalId = setInterval(() => {
        setTimer((prev) => {
          let newTime = prev - 1

          let second = secondToTime(newTime)
          
          setTimerMinutes(second[0])
          setTimerSeconds(second[1])

          return newTime
        })
      }, 1000)

      setTimerIntervalId(intervalId)
    }
  }
  
  function secondToTime(second) {
    return [Math.floor(second / 60), second % 60]
  }

  function formatTypeTime (time) {
    if (time < 10) {
      return `0${time}`
    } else {
      return time
    }
  }

    if (!isOpen) return null

  return (
    <div className="times">
          <div className="timer__block">
            <div className="block clock">
              00
            </div>
            <span>:</span>
            <div className="block minute">
              00
            </div>
            <span>:</span>
            <div className="block second">
              00
            </div>
          </div>

          <div className="text__center">
          <motion.button
            className="btn times__btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Start
          </motion.button>
          <motion.button
            className="btn times__btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Stop
          </motion.button>
          <motion.button
            className="btn times__btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Reset
          </motion.button>
          </div>
        </div>
  );
}

export default TimerClock;
