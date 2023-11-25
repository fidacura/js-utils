const { weekNumber } = require("../weekNumber");

describe("weekNumber", () => {
  test("finds the week number of a date", () => {
    const date = new Date("2023-01-01");
    expect(weekNumber(date)).toBe(1);
  });
});
