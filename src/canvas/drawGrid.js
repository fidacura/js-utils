/**
 * Draws a grid on a canvas element.
 *
 * @param {HTMLCanvasElement} canvas The canvas element.
 * @param {number} gridSize The size of each grid cell.
 */
export const drawGrid = (canvas, gridSize = 50) => {
  const ctx = canvas.getContext("2d");
  ctx.beginPath();

  for (let x = 0; x <= canvas.width; x += gridSize) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
  }

  for (let y = 0; y <= canvas.height; y += gridSize) {
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
  }

  ctx.strokeStyle = "#ddd";
  ctx.stroke();
};
