/**
 * windowResize
 * Handles callbacks for when the mobile keyboard is shown or hidden.
 *
 * @param {Function} downCb Callback function for when the keyboard is hidden.
 * @param {Function} upCb Callback function for when the keyboard is shown.
 */
export const windowResize = (downCb, upCb) => {
  let clientHeight = window.innerHeight;

  downCb = typeof downCb === "function" ? downCb : () => {};
  upCb = typeof upCb === "function" ? upCb : () => {};

  window.addEventListener("resize", () => {
    const height = window.innerHeight;
    if (height === clientHeight) {
      downCb();
    } else if (height < clientHeight) {
      upCb();
    }
    clientHeight = height;
  });
};
