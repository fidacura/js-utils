/**
 * Determines whether two dates are on the same day.
 *
 * @param {Date} date1 The first date.
 * @param {Date} [date2=new Date()] The second date, defaults to the current date.
 * @return {boolean} True if the dates are on the same day, false otherwise.
 */
export const isSameDay = (date1, date2 = new Date()) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};
