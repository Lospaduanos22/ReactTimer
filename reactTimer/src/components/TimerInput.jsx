import PropTypes from 'prop-types';

const TimerInput = ({ hours, minutes, seconds, setHours, setMinutes, setSeconds }) => {
  return (
    <div>
      <label>Hours:</label>
      <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} />
      <label>Minutes:</label>
      <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
      <label>Seconds:</label>
      <input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
    </div>
  );
};

TimerInput.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  setHours: PropTypes.func.isRequired,
  setMinutes: PropTypes.func.isRequired,
  setSeconds: PropTypes.func.isRequired,
};

export default TimerInput;
