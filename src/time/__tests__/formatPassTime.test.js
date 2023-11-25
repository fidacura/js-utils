const { formatPassTime } = require("../formatPassTime");

describe("formatPassTime", () => {
  test("formats elapsed time correctly", () => {
    const startTime = new Date(Date.now() - 1000 * 60 * 60 * 24); // 1 day ago
    expect(formatPassTime(startTime)).toMatch(/1天前/);
  });
});
