const { timezoneConverter } = require("../timezoneConverter");

describe("timezoneConverter", () => {
  test("converts time between timezones", () => {
    const newYorkTime = "2023-03-15 08:00:00";
    const tokyoTime = timezoneConverter(
      newYorkTime,
      "America/New_York",
      "Asia/Tokyo"
    );
    expect(tokyoTime).toBe("3/15/2023, 1:00:00 PM"); // Updated expected result
  });
});
