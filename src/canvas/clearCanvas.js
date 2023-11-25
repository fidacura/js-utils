/**
 * Clears a canvas element.
 * @param {HTMLCanvasElement} canvas - The canvas element to clear.
 */
export const clearCanvas = (canvas) => {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
};
