/**
 * setScrollTop:
 * Sets the scroll bar position from the top of the page.
 *
 * @param {number} value The scroll top distance in pixels.
 */
export const setScrollTop = (value) => {
  document.documentElement.scrollTop = value;
  document.body.scrollTop = value; // For older browsers
};
