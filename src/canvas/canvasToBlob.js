/**
 * Converts canvas content to a Blob.
 *
 * @param {HTMLCanvasElement} canvas The canvas element.
 * @return {Promise<Blob>} A promise that resolves with the Blob.
 */
export const canvasToBlob = (canvas) => {
  return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
          if (blob) {
              resolve(blob);
          } else {
              reject(new Error('Canvas to Blob conversion failed'));
          }
      }, 'image/png');
  });
};