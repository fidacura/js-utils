/**
 * Creates a throttled function that only invokes the provided function at most
 * once per every `wait` milliseconds.
 *
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to throttle invocations to.
 * @return {Function} The throttled function.
 */
export const throttle = (func, wait) => {
  let inThrottle;

  return function () {
    const context = this;
    const args = arguments;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), wait);
    }
  };
};
