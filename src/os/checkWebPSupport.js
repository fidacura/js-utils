/**
 * Checks if the browser supports WebP images.
 *
 * @return {boolean} True if WebP is supported, false otherwise.
 */
export const checkWebPSupport = () => {
  const elem = document.createElement("canvas");
  if (!!(elem.getContext && elem.getContext("2d"))) {
    // Was able or not to get WebP representation
    return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }
  // Very old browser like IE 8, canvas not supported
  return false;
};
