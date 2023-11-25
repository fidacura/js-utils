/**
 * colorPaletteGenerator:
 * Generates a color palette from a base color.
 *
 * @param {string} baseColor The base hex color code.
 * @param {number} numberOfShades The number of shades to generate.
 * @return {Array<string>} An array of hex color codes.
 */
export const colorPaletteGenerator = (baseColor, numberOfShades = 5) => {
  const lightenDarkenColor = (col, amt) => {
    let usePound = false;
    if (col[0] === "#") {
      col = col.slice(1);
      usePound = true;
    }

    const num = parseInt(col, 16);
    let r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    let b = ((num >> 8) & 0x00ff) + amt;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    let g = (num & 0x0000ff) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  };

  const palette = [];
  for (let i = -3; i < numberOfShades - 3; i++) {
    palette.push(lightenDarkenColor(baseColor, i * 20));
  }
  return palette;
};
