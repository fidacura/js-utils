/**
 * shuffleArray:
 * Shuffles an array in random order.
 *
 * @param {Array} array The array to shuffle.
 * @return {Array} The shuffled array.
 */
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
