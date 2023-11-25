/**
 *
 * Cookies Manipulation:
 * - getCookie: Retrieves the value of a specified cookie.
 * - delCookie: Deletes a specified cookie by setting its expiration date to the past.
 * - setCookie: Sets a cookie with a specified name, value, and number of days until expiration.
 *
 * - lsCookies: List all cookies stored in the browser.
 * - cookieConsent: Manage cookie consent for compliance with regulations.
 * - getCookieSize: Calculates the total size of all cookies.
 *
 */

export { default as getCookie } from "./getCookie";
export { default as delCookie } from "./delCookie";
export { default as setCookie } from "./setCookie";
export { default as lsCookies } from "./lsCookies";
export { default as cookieConsent } from "./cookieConsent";
export { default as getCookieSize } from "./getCookieSize";
