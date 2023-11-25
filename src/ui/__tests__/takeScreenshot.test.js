const { takeScreenshot } = require("../takeScreenshot");

describe("takeScreenshot", () => {
  test("exists as a function", () => {
    expect(typeof takeScreenshot).toBe("function");
  });
});
