/**
 * keyboardShortcut:
 * Registers a keyboard shortcut.
 *
 * @param {String} keys The key combination (e.g., 'Ctrl+C').
 * @param {Function} callback The function to call when the key combination is pressed.
 */
export const keyboardShortcut = (keys, callback) => {
  const keyCombination = keys.split("+").map((key) => key.trim().toLowerCase());

  document.addEventListener("keydown", (e) => {
    if (
      keyCombination.every((key) => {
        if (key === "ctrl" && !e.ctrlKey) return false;
        if (key === "shift" && !e.shiftKey) return false;
        if (key === "alt" && !e.altKey) return false;
        if (key === e.key.toLowerCase()) return true;
        return false;
      })
    ) {
      callback();
    }
  });
};
