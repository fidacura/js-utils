/**
 * Checks if an element is in the viewport.
 * @param {HTMLElement} element - The element to check.
 * @returns {boolean} True if the element is in the viewport, false otherwise.
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
