const { randomInt } = require("../randomInt");

describe("randomInt", () => {
  test("returns a value within the specified range", () => {
    const min = 10;
    const max = 20;
    const value = randomInt(min, max);
    expect(value).toBeGreaterThanOrEqual(min);
    expect(value).toBeLessThanOrEqual(max);
  });

  test("returns an integer", () => {
    const value = randomInt(1, 5);
    expect(Number.isInteger(value)).toBeTruthy();
  });
});
