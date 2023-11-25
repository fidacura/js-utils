const { randomFloat } = require("../randomFloat");

describe("randomFloat", () => {
  test("returns a value within the specified range", () => {
    const min = 1.5;
    const max = 3.5;
    const value = randomFloat(min, max);
    expect(value).toBeGreaterThanOrEqual(min);
    expect(value).toBeLessThanOrEqual(max);
  });

  test("returns a floating-point number", () => {
    const value = randomFloat(1, 2);
    expect(value).toBeCloseTo(value, 1);
  });
});
