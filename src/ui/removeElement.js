/**
 * Removes an element from the DOM.
 * @param {HTMLElement} element - The element to remove.
 */
export const removeElement = (element) => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};
