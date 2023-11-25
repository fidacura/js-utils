const { randomString } = require("../randomString");

describe("randomString", () => {
  test("returns a string of specified length", () => {
    const length = 10;
    const str = randomString(length);
    expect(str).toHaveLength(length);
  });

  test("returns a string containing only specified characters", () => {
    const length = 5;
    const chars = "ABC";
    const str = randomString(length, chars);
    expect(str).toMatch(new RegExp(`^[${chars}]{${length}}$`));
  });
});
