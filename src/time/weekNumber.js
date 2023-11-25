/**
 * Finds the week number for a given date.
 *
 * @param {Date} date The date for which to find the week number.
 * @return {Number} The week number.
 */
export const weekNumber = (date) => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;

  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};
