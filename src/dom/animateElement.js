/**
 * animateElement:
 * Animates an element with custom properties.
 *
 * @param {HTMLElement} element The element to animate.
 * @param {Object} properties CSS properties to animate.
 * @param {number} duration Duration of the animation in milliseconds.
 */
export const animateElement = (element, properties, duration = 1000) => {
  const style = element.style;
  const startTime = performance.now();

  const animate = (time) => {
    let progress = (time - startTime) / duration;
    if (progress > 1) progress = 1;

    for (const property in properties) {
      const start = parseFloat(style[property]) || 0;
      const end = properties[property];
      style[property] =
        start + (end - start) * progress + (property === "opacity" ? "" : "px");
    }

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};
