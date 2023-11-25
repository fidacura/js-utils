/**
 * Determines whether a string is a valid URL address.
 *
 * @param {String} str The string to test.
 * @return {Boolean} True if the string is a valid URL, false otherwise.
 */
export const isUrl = (str) => {
  return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(
    str
  );
};
