/**
 * Saves the current state of a canvas (context).
 * @param {CanvasRenderingContext2D} context - The canvas rendering context to save.
 */
export const saveCanvasState = (context) => {
  context.save();
};
