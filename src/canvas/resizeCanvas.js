/**
 * Resizes a canvas while maintaining its aspect ratio.
 * @param {HTMLCanvasElement} canvas - The canvas element to resize.
 * @param {number} newWidth - The new width of the canvas.
 * @param {number} newHeight - The new height of the canvas.
 */
export const resizeCanvas = (canvas, newWidth, newHeight) => {
  const aspectRatio = canvas.width / canvas.height;
  canvas.width = newWidth;
  canvas.height = newWidth / aspectRatio;
};
