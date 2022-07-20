import useStopWatch from "../hooks/useStopWatch";

const StopWatchClock = (props) => {
  const { 
  timerIsOpen,
  stopSpeech,
  handleListening,
  startSpeech,
  isStopWatchResultOpen} = props

  const {
    timer, 
    setRunning, 
    setTimer
  } = useStopWatch(handleListening, startSpeech, stopSpeech, isStopWatchResultOpen)

  if (!timerIsOpen) return null;
  return (
    <div>
      <div className="times">
        <div className="timer__block">
          <div className="block clock">
            {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}
          </div>
          <span>:</span>
          <div className="block minute">
            {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}
          </div>
          <span>:</span>
          <div className="block second">
            {("0" + Math.floor((timer / 100) % 10)).slice(-2)}
          </div>
        </div>

        <div className="text__center">
          <button
            className="button times__btn s_clock"
            onClick={() => setRunning(true)}
          >
            Start
          </button>
          <button
            className="button times__btn s_clock"
            onClick={() => setRunning(false)}
          >
            Stop
          </button>
          <button
            className="button times__btn s_clock"
            style={{marginRight: '0'}}
            onClick={() => setTimer(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatchClock;
