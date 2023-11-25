/**
 * getCookie:
 * Retrieves the value of a specified cookie.
 *
 * @param {String} name The name of the cookie to retrieve.
 * @returns {String} The value of the cookie, or an empty string if not found.
 */
export const getCookie = (name) => {
  const cookies = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("="));
  const cookieFound = cookies.find((cookie) => cookie[0] === name);
  return cookieFound ? decodeURIComponent(cookieFound[1]) : "";
};
