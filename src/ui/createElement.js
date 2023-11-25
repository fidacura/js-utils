// DOM Manipulation Helpers
/**
 * Creates and appends an element to the DOM.
 * @param {string} tag - The tag name of the element.
 * @param {HTMLElement} parent - The parent element to append to.
 * @param {Object} attributes - Object containing attributes to set on the element.
 * @returns {HTMLElement} The created element.
 */
export const createElement = (tag, parent, attributes = {}) => {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) =>
    element.setAttribute(key, value)
  );
  parent.appendChild(element);
  return element;
};
