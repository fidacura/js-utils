/**
 * Restores a previously saved state of a canvas (context).
 * @param {CanvasRenderingContext2D} context - The canvas rendering context to restore.
 */
export const restoreCanvasState = (context) => {
  context.restore();
};
