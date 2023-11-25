/**
 * modalPopup
 * Creates and displays a modal popup.
 *
 * @param {String} content HTML content to be displayed in the modal.
 */
export const modalPopUp = (content) => {
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.backgroundColor = "white";
  modal.style.padding = "20px";
  modal.style.borderRadius = "5px";
  modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  modal.style.zIndex = "1001";

  const backdrop = document.createElement("div");
  backdrop.style.position = "fixed";
  backdrop.style.top = "0";
  backdrop.style.left = "0";
  backdrop.style.width = "100%";
  backdrop.style.height = "100%";
  backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  backdrop.style.zIndex = "1000";

  modal.innerHTML = content;

  backdrop.addEventListener("click", () => {
    document.body.removeChild(modal);
    document.body.removeChild(backdrop);
  });

  document.body.appendChild(backdrop);
  document.body.appendChild(modal);
};
