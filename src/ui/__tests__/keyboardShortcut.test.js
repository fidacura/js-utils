const { keyboardShortcut } = require("../keyboardShortcut");

describe("keyboardShortcut", () => {
  test("exists as a function", () => {
    expect(typeof keyboardShortcut).toBe("function");
  });
});
