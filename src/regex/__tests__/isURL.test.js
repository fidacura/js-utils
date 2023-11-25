const { isUrl } = require("../isURL");

describe("isUrl", () => {
  test("validates a valid URL", () => {
    expect(isUrl("http://www.example.com")).toBeTruthy();
    expect(isUrl("https://example.com")).toBeTruthy();
  });

  test("returns false for an invalid URL", () => {
    expect(isUrl("invalid-url")).toBeFalsy();
  });
});
