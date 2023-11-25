/**
 * filterElements:
 * Filters DOM elements based on a custom criteria function.
 *
 * @param {String} selector CSS selector for the elements to filter.
 * @param {Function} criteria Function that determines whether an element should be included.
 * @return {Array} An array of elements that match the criteria.
 */
export const filterElements = (selector, criteria) => {
  const elements = document.querySelectorAll(selector);
  return Array.from(elements).filter(criteria);
};
