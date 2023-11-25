/**
 * Maps a number from one range to another.
 * @param {number} num - The number to map.
 * @param {number} in_min - The lower bound of the input range.
 * @param {number} in_max - The upper bound of the input range.
 * @param {number} out_min - The lower bound of the output range.
 * @param {number} out_max - The upper bound of the output range.
 * @returns {number} Mapped number.
 */
export const mapRange = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
