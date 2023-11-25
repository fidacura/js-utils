/**
 * Wraps text inside a canvas element.
 *
 * @param {HTMLCanvasElement} canvas The canvas element.
 * @param {string} text The text to wrap.
 * @param {number} maxWidth The maximum width of the text block.
 * @param {number} lineHeight The height of each line.
 * @param {number} x The x-coordinate of the text position.
 * @param {number} y The y-coordinate of the first line of text.
 */
export const wrapText = (canvas, text, maxWidth, lineHeight, x, y) => {
  const ctx = canvas.getContext("2d");
  const words = text.split(" ");
  let line = "";

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }

  ctx.fillText(line, x, y);
};
