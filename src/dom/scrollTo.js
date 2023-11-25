/**
 * scrollTo:
 * Smoothly scrolls the window to a specific position within a given duration.
 *
 * @param {number} targetPosition The target scroll position in pixels.
 * @param {number} duration The duration of the scroll in milliseconds.
 */
export const scrollTo = (targetPosition, duration) => {
  const start = getScrollTop();
  const change = targetPosition - start;
  const increment = 20;

  const animateScroll = (elapsedTime) => {
    const elapsed = elapsedTime + increment;
    const position = easeInOut(elapsed, start, change, duration);

    window.scrollTo(0, position);

    if (elapsed < duration) {
      setTimeout(() => animateScroll(elapsed), increment);
    }
  };

  const easeInOut = (currentTime, start, change, duration) => {
    currentTime /= duration / 2;
    if (currentTime < 1) {
      return (change / 2) * currentTime * currentTime + start;
    }
    currentTime--;
    return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start;
  };

  animateScroll(0);
};
