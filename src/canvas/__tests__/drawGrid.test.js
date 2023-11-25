import { drawGrid } from "../drawGrid";

describe("drawGrid", () => {
  it("draws a grid on the canvas", () => {
    // Mock canvas context methods used by drawGrid
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath = jest.fn();
    ctx.moveTo = jest.fn();
    ctx.lineTo = jest.fn();
    ctx.stroke = jest.fn();

    drawGrid(canvas, 50);

    expect(ctx.beginPath).toHaveBeenCalled();
    expect(ctx.moveTo).toHaveBeenCalled();
    expect(ctx.lineTo).toHaveBeenCalled();
    expect(ctx.stroke).toHaveBeenCalled();
  });
});
