/**
 * lazyLoadImages:
 * Implements lazy loading of images.
 */
export const lazyLoadImages = () => {
  const images = document.querySelectorAll("img[data-lazy]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.lazy;
        img.removeAttribute("data-lazy");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => {
    imageObserver.observe(img);
  });
};
