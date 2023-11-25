import { contrastColor } from "../contrastColor";

describe("contrastColor", () => {
  it("returns black for light colors", () => {
    expect(contrastColor("#FFFFFF")).toBe("#000000");
  });

  it("returns white for dark colors", () => {
    expect(contrastColor("#000000")).toBe("#FFFFFF");
  });
});
