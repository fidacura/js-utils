/**
 * setCookie
 * Sets a cookie with a specified name, value, and number of days until expiration.
 *
 * @param {String} name The name of the cookie.
 * @param {String} value The value of the cookie.
 * @param {Number} days The number of days until the cookie expires.
 */
export const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`;
};
