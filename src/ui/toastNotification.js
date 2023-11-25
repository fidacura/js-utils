/**
 * toastNotification:
 * Displays a toast notification on the screen.
 *
 * @param {String} message The message to display in the toast.
 * @param {Number} duration Duration in milliseconds for which the toast is visible.
 */
export const toastNotification = (message, duration = 3000) => {
  const toast = document.createElement("div");
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.left = "20px";
  toast.style.padding = "10px";
  toast.style.backgroundColor = "black";
  toast.style.color = "white";
  toast.style.borderRadius = "5px";
  toast.style.zIndex = "1000";
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    document.body.removeChild(toast);
  }, duration);
};
