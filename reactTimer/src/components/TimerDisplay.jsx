import PropTypes from 'prop-types';

const TimerDisplay = ({ timeLeft }) => {
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>{formatTime(timeLeft)}</h2>
    </div>
  );
};

TimerDisplay.propTypes = {
  timeLeft: PropTypes.number.isRequired,
};

export default TimerDisplay;
