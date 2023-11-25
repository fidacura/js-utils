const { isLeapYear } = require("../isLeapYear");

describe("isLeapYear", () => {
  test("identifies leap year", () => {
    expect(isLeapYear(2020)).toBeTruthy();
  });

  test("identifies non-leap year", () => {
    expect(isLeapYear(2019)).toBeFalsy();
  });
});
