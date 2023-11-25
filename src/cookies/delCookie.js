/**
 * delCookie
 * Deletes a specified cookie by setting its expiration date to the past.
 *
 * @param {String} name The name of the cookie to delete.
 */
export const delCookie = (name) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};
