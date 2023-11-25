import { colorPaletteGenerator } from "../colorPaletteGenerator";

describe("colorPaletteGenerator", () => {
  it("generates a color palette with the specified number of shades", () => {
    const baseColor = "#ff0000";
    const numberOfShades = 5;
    const palette = colorPaletteGenerator(baseColor, numberOfShades);
    expect(palette).toHaveLength(numberOfShades);
    palette.forEach((color) => {
      expect(color).toMatch(/^#[0-9a-f]{6}$/i);
    });
  });
});
