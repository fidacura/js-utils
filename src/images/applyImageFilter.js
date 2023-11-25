/**
 * applyImageFilter:
 * Applies an image filter to a canvas element.
 *
 * @param {HTMLCanvasElement} canvas The canvas element.
 * @param {string} filterType The type of filter ('grayscale', 'sepia', etc.).
 */
export const applyImageFilter = (canvas, filterType) => {
  const ctx = canvas.getContext("2d");
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];

    switch (filterType) {
      case "grayscale":
        data[i] = brightness;
        data[i + 1] = brightness;
        data[i + 2] = brightness;
        break;
      case "sepia":
        data[i] = brightness + 100;
        data[i + 1] = brightness + 50;
        data[i + 2] = brightness;
        break;
      // Add more filters as needed
    }
  }

  ctx.putImageData(imageData, 0, 0);
};
