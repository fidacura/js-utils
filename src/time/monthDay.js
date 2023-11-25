/**
 * Gets the total number of days in the specified date's month.
 *
 * @param {Date} time The date to check.
 * @return {number} The number of days in the month.
 */
export const monthDays = (time) => {
  const date = new Date(time);
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};
