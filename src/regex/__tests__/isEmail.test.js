const { isEmail } = require("../isEmail");

describe("isEmail", () => {
  test("validates a valid email address", () => {
    expect(isEmail("example@test.com")).toBeTruthy();
  });

  test("returns false for an invalid email address", () => {
    expect(isEmail("example.com")).toBeFalsy();
  });
});
