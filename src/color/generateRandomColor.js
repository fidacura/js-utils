/**
 * Generates a random color.
 * @param {string} format - The format of the color (hex, rgb, rgba, hsl, hsla).
 * @returns {string} Random color in specified format.
 */

import { rgbToHex } from "./rgbToHex"; // Adjust the path as necessary

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const generateRandomColor = (format = "hex") => {
  const r = randomInt(0, 255);
  const g = randomInt(0, 255);
  const b = randomInt(0, 255);
  const a = randomFloat(0, 1).toFixed(2);
  switch (format.toLowerCase()) {
    case "rgb":
      return `rgb(${r}, ${g}, ${b})`;
    case "rgba":
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    case "hsl": {
      const h = randomInt(0, 360);
      const s = randomInt(0, 100);
      const l = randomInt(0, 100);
      return `hsl(${h}, ${s}%, ${l}%)`;
    }
    case "hsla": {
      const h = randomInt(0, 360);
      const s = randomInt(0, 100);
      const l = randomInt(0, 100);
      return `hsla(${h}, ${s}%, ${l}%, ${a})`;
    }
    case "hex":
    default:
      return rgbToHex(r, g, b);
  }
};
