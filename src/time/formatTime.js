/**
 * Formats milliseconds into a readable time string.
 * @param {number} milliseconds - The number of milliseconds to format.
 * @returns {string} The formatted time string (e.g., "00:05:30" for 5 minutes and 30 seconds).
 */
export const formatTime = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
