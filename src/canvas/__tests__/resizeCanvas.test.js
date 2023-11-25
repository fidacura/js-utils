import { resizeCanvas } from "../resizeCanvas";

describe("resizeCanvas", () => {
  it("resizes the canvas while maintaining aspect ratio", () => {
    const canvas = document.createElement("canvas");
    canvas.width = 100;
    canvas.height = 50;
    resizeCanvas(canvas, 200);
    expect(canvas.width).toBe(200);
    expect(canvas.height).toBe(100); // Maintains the 2:1 aspect ratio
  });
});
