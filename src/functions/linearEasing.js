/**
 * Linear easing function.
 * @param {number} t - Current time.
 * @param {number} b - Start value.
 * @param {number} c - Change in value.
 * @param {number} d - Duration.
 * @returns {number} Eased value.
 */
export const linearEasing = (t, b, c, d) => {
  return (c * t) / d + b;
};
