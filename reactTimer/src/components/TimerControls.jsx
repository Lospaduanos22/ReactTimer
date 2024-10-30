import PropTypes from 'prop-types';

const TimerControls = ({ startTimer, stopTimer, isRunning }) => {
  return (
    <div>
      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
    </div>
  );
};

TimerControls.propTypes = {
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
};

export default TimerControls;
