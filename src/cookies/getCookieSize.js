/**
 * Calculates the total size of all cookies.
 *
 * // Usage
 * const totalCookieSize = calculateCookieSize();
 * console.log('Total cookie size:', totalCookieSize, 'bytes');
 *
 * @return {number} The total size of all cookies in bytes.
 */
export const getCookieSize = () => {
  const cookies = document.cookie.split(";");
  return cookies.reduce((totalSize, cookie) => {
    // Size in bytes is roughly equal to the string length
    return totalSize + cookie.length;
  }, 0);
};
