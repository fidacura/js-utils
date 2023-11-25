import { hexToRgb } from "../hexToRgb";

describe("hexToRgb", () => {
  it("converts a hex color code to an RGB object", () => {
    const result = hexToRgb("#ff0000");
    expect(result).toEqual({ r: 255, g: 0, b: 0 });
  });

  it("returns null for invalid hex codes", () => {
    expect(hexToRgb("#gggggg")).toBeNull();
  });
});
