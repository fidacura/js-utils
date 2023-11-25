/**
 * timezoneConverter:
 * Converts a date and time from one timezone to another.
 *
 * // Example: Convert from New York time to Tokyo time
 * const newYorkTime = '2023-03-15 08:00:00';
 * const tokyoTime = timezoneConverter(newYorkTime, 'America/New_York', 'Asia/Tokyo');
 * console.log(tokyoTime); // Outputs the Tokyo time corresponding to the provided New York time
 *
 * @param {string | Date} date The date to convert. Can be a Date object or a string that Date can parse.
 * @param {string} fromTimeZone The IANA timezone string of the original date.
 * @param {string} toTimeZone The IANA timezone string of the target timezone.
 * @return {string} The converted date and time as a string.
 */
export const timezoneConverter = (date, fromTimeZone, toTimeZone) => {
  const dateObj =
    typeof date === "string" || date instanceof String ? new Date(date) : date;
  const utcDate = new Date(
    dateObj.toLocaleString("en-US", { timeZone: fromTimeZone })
  );
  const targetDate = new Date(
    utcDate.toLocaleString("en-US", { timeZone: toTimeZone })
  );

  return targetDate.toLocaleString();
};
