import { rgbToHex } from "../rgbToHex";

describe("rgbToHex", () => {
  it("converts RGB values to a hex color code", () => {
    expect(rgbToHex(255, 0, 0)).toBe("#ff0000");
  });
});
