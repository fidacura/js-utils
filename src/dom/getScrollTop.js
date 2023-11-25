/**
 * getScrollTop:
 * Retrieves the distance of the scroll bar from the top of the page.
 *
 * @returns {number} The scroll top distance in pixels.
 */
export const getScrollTop = () => {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
};
