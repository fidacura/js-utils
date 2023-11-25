/**
 * randomGradient:
 * Generates a random CSS gradient.
 *
 * @return {string} The CSS gradient string.
 */
export const randomGradient = () => {
  const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padEnd(6, "0")}`;
  return `linear-gradient(${Math.floor(
    Math.random() * 360
  )}deg, ${randomColor()}, ${randomColor()})`;
};
