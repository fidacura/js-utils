/**
 * Sorts child elements of a container based on a specified criteria.
 *
 * // Example compare function for alphabetical sorting
 * const compareAlphabetically = (a, b) => a.textContent.localeCompare(b.textContent);
 *
 * @param {HTMLElement} container The container element whose children are to be sorted.
 * @param {Function} compareFunction The comparison function used for sorting.
 */
export const sortChildElements = (container, compareFunction) => {
  const items = Array.from(container.children);
  const sortedItems = items.sort(compareFunction);

  // Re-append items in sorted order
  for (const item of sortedItems) {
    container.appendChild(item);
  }
};
