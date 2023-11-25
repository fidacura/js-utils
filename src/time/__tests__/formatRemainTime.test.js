const { formatRemainTime } = require("../formatRemainTime");

describe("formatRemainTime", () => {
  test("formats remaining time correctly", () => {
    const endTime = new Date(Date.now() + 1000 * 60 * 60 * 24); // 1 day from now
    expect(formatRemainTime(endTime)).toMatch(/1天 0小时 0分钟 0秒/);
  });
});
