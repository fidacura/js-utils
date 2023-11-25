/**
 * Generates a random floating-point number within a specified range.
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @returns {number} Random floating-point number.
 */

export const randomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
};
