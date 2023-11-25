/**
 * Downloads the content of a canvas element as an image.
 *
 * @param {HTMLCanvasElement} canvas The canvas element.
 * @param {string} filename The filename for the downloaded image.
 */
export const downloadCanvas = (canvas, filename = "canvas-image.png") => {
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
};
