/**
 * Determines whether a string is a valid email address.
 *
 * @param {String} str The string to test.
 * @return {Boolean} True if the string is a valid email address, false otherwise.
 */
export const isEmail = (str) => {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(str);
};
