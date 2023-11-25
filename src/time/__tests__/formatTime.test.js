const { formatTime } = require("../formatTime");

describe("formatTime", () => {
  test("formats milliseconds into readable time", () => {
    const milliseconds = 1000 * 60 * 5 + 30000; // 5 minutes 30 seconds
    expect(formatTime(milliseconds)).toBe("00:05:30");
  });
});
