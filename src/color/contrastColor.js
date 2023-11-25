/**
 * contrastColor:
 * Finds a contrasting color (black or white) for the given color.
 *
 * @param {string} color The hex color code.
 * @return {string} The hex code for black or white.
 */
export const contrastColor = (color) => {
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#FFFFFF";
};
