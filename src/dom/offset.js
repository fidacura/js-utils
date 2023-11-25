/**
 * offset:
 * Retrieves the position of an element relative to the document.
 *
 * @param {HTMLElement} element The element to get the position of.
 * @returns {{ left: number, top: number }} The position of the element.
 */
export const offset = (element) => {
  let rect = element.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
};
