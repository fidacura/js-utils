/**
 * Determines whether a given year is a leap year.
 *
 * @param {number} year The year to check.
 * @return {boolean} True if the year is a leap year, false otherwise.
 */
export const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
