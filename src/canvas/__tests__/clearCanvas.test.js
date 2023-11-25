import { clearCanvas } from "../clearCanvas";

describe("clearCanvas", () => {
  it("clears the canvas", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, 100, 100); // Draw something to clear
    clearCanvas(canvas);
    const data = ctx.getImageData(0, 0, 100, 100).data;
    expect(data).toEqual(new Uint8ClampedArray(40000)); // 100x100x4 zeros
  });
});
