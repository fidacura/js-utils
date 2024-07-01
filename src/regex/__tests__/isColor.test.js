const { isColor } = require("../isColor");

describe("isColor", () => {
  test("validates hexadecimal color", () => {
    expect(isColor("#ff5733")).toBeTruthy();
    expect(isColor("#FFF")).toBeTruthy();
  });

  test("validates RGB color", () => {
    expect(isColor("rgb(255, 87, 51)")).toBeTruthy();
  });

  test("validates RGBA color", () => {
    expect(isColor("rgba(255, 87, 51, 0.5)")).toBeTruthy();
  });

  test("returns false for invalid color", () => {
    expect(isColor("notacolor")).toBeFalsy();
    expect(isColor("rgba(600, 87, 51, 0.5")).toBeFalsy();
    expect(isColor("#FFFFFFF")).toBeFalsy();
  });
});
