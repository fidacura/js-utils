/**
 * Creates a deep clone of a DOM element.
 *
 * @param {HTMLElement} element The DOM element to clone.
 * @return {HTMLElement} The cloned element.
 */
export const cloneElement = (element) => {
  return element.cloneNode(true);
};
