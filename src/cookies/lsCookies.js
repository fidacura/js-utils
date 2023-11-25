/**
 * listCookies:
 * Lists all cookies stored in the browser.
 *
 * @return {Object} An object with key-value pairs of cookies.
 */
export const lsCookies = () => {
  const cookies = document.cookie.split(";");
  return cookies.reduce((acc, cookie) => {
    const [key, value] = cookie.split("=").map((c) => c.trim());
    acc[key] = decodeURIComponent(value);
    return acc;
  }, {});
};
