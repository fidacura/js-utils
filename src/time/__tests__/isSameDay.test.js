const { isSameDay } = require("../isSameDay");

describe("isSameDay", () => {
  test("checks if two dates are the same day", () => {
    const date1 = new Date("2023-01-01");
    const date2 = new Date("2023-01-01");
    expect(isSameDay(date1, date2)).toBeTruthy();
  });

  test("returns false for different days", () => {
    const date1 = new Date("2023-01-01");
    const date2 = new Date("2023-01-02");
    expect(isSameDay(date1, date2)).toBeFalsy();
  });
});
