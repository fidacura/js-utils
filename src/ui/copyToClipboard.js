/**
 * Copies text to the clipboard.
 * @param {string} text - The text to copy to the clipboard.
 * @returns {boolean} True if the copy operation was successful, false otherwise.
 */
export const copyToClipboard = (text) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  const success = document.execCommand("copy");
  document.body.removeChild(textArea);
  return success;
};
