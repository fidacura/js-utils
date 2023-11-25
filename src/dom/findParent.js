/**
 * Finds the closest parent element matching a given selector.
 *
 * @param {HTMLElement} element The element from which to find the parent.
 * @param {string} selector The CSS selector to match the parent.
 * @return {HTMLElement|null} The closest matching parent element or null if not found.
 */
export const findParent = (element, selector) => {
  let currentElement = element;

  while (currentElement) {
    if (currentElement.matches(selector)) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }

  return null;
};
