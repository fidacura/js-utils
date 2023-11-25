/**
 * Creates a countdown timer to a specific date.
 *
 * @param {Date} eventDate The event date to count down to.
 * @param {Function} updateCallback Callback function that receives the remaining time.
 */
export const countdownTimer = (eventDate, updateCallback) => {
  const calculateRemainingTime = () => {
    const now = new Date();
    const remainingTime = eventDate - now;

    let seconds = Math.floor((remainingTime / 1000) % 60);
    let minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    let hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  };

  const timer = () => {
    const timeLeft = calculateRemainingTime();
    updateCallback(timeLeft);
    if (
      timeLeft.days <= 0 &&
      timeLeft.hours <= 0 &&
      timeLeft.minutes <= 0 &&
      timeLeft.seconds <= 0
    ) {
      clearInterval(interval);
    }
  };

  const interval = setInterval(timer, 1000);
  timer();
};
