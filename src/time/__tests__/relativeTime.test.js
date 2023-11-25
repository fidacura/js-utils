const { relativeTime } = require("../relativeTime");

describe("relativeTime", () => {
  test("calculates relative time", () => {
    const oneHourAgo = new Date(Date.now() - 1000 * 60 * 60); // 1 hour ago
    expect(relativeTime(oneHourAgo)).toMatch(/1 hours ago/);
  });
});
