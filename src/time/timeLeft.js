/**
 * Calculates the remaining time between two dates.
 *
 * @param {Date|string} startTime The start time.
 * @param {Date|string} endTime The end time.
 * @return {Object|null} An object with the remaining days, hours, minutes, and seconds, or null if the input is invalid.
 */
export const timeLeft = (startTime, endTime) => {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const t = endDate.getTime() - startDate.getTime();

  if (isNaN(t)) {
    return null;
  }

  return {
    d: Math.floor(t / (1000 * 60 * 60 * 24)),
    h: Math.floor((t / (1000 * 60 * 60)) % 24),
    m: Math.floor((t / (1000 * 60)) % 60),
    s: Math.floor((t / 1000) % 60),
  };
};
