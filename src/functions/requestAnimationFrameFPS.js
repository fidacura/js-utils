/**
 * Request Animation Frame with a set FPS (Frames Per Second).
 * @param {Function} callback - The function to be executed in each frame.
 * @param {number} fps - The desired frames per second (e.g., 60 for 60 FPS).
 * @returns {Function} A function to cancel the animation frame loop.
 */
export const requestAnimationFrameFPS = (callback, fps) => {
  const interval = 1000 / fps;
  let lastTime = 0;
  function loop(timestamp) {
    if (timestamp - lastTime >= interval) {
      lastTime = timestamp;
      callback();
    }
    requestAnimationFrame(loop);
  }
  const animationFrameId = requestAnimationFrame(loop);
  // Return a function to cancel the animation frame loop
  return () => cancelAnimationFrame(animationFrameId);
};
