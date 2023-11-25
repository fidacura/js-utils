import { wrapText } from "../wrapText";

describe("wrapText", () => {
  it("wraps text inside the canvas", () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillText = jest.fn(); // Mock fillText

    wrapText(canvas, "Sample text", 100, 10, 0, 10);
    expect(ctx.fillText).toHaveBeenCalled();
  });
});
