/**
 * randomString:
 * Generates a random string of specified length.
 *
 * @param {number} length The length of the string to generate.
 * @param {string} chars The character set to use for generating the string.
 * @return {string} The generated random string.
 */
export const randomString = (
  length,
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
