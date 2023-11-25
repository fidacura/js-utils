/**
 * Creates a debounced function that delays invoking the provided function
 * until at least `wait` milliseconds have elapsed since the last invocation.
 * It includes an option to execute immediately on the first call.
 *
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @param {boolean} immediate If true, trigger the function on the leading edge, instead of the trailing.
 * @return {Function} The debounced function.
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};
