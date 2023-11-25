/**
 *
 * User Interface Interaction:
 * - toggleFullScreen: Toggles fullscreen mode on double click or pressing "f".
 * - takeScreenshot: Takes a screenshot of the current webpage and saves it with an incremental filename when the "s" key is pressed.
 * - copyToClipboard: Copies text to the clipboard.
 * - isInViewport: Checks if an element is in the viewport.
 *
 * - dragElement: Make an element draggable within the viewport.
 * - toastNotification: Display a brief, non-blocking notification on the screen.
 * - modalPopUp: Create and manage modal pop-ups with ease.
 * - keyboardShortcut: Register and handle custom keyboard shortcuts.
 *
 */

export { default as copyToClipboard } from "./copyToClipboard";
export { default as dragElement } from "./dragElement";
export { default as keyboardShortcut } from "./keyboardShortcut";
export { default as isInViewport } from "./isInViewport";
export { default as modalPopUp } from "./modalPopUp";
export { default as takeScreenshot } from "./takeScreenshot";
export { default as toastNotification } from "./toastNotification";
export { default as toggleFullScreen } from "./toggleFullScreen";
