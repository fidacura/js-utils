const { randomGradient } = require("../randomGradient");

describe("randomGradient", () => {
  test("returns a valid CSS gradient string", () => {
    const gradient = randomGradient();
    expect(typeof gradient).toBe("string");
    expect(gradient).toMatch(
      /linear-gradient\(\d+deg, #[0-9a-f]{6}, #[0-9a-f]{6}\)/i
    );
  });
});
