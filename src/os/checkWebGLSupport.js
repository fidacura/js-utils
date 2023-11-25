/**
 * Checks if the browser supports WebGL.
 *
 * // Usage
 * const features = detectBrowserFeatures();
 * console.log('WebP support:', features.webpSupport);
 * console.log('WebGL support:', features.webglSupport);
 *
 * @return {boolean} True if WebGL is supported, false otherwise.
 */
export const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
};
