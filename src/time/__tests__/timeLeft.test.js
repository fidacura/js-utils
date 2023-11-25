const { timeLeft } = require("../timeLeft");

describe("timeLeft", () => {
  test("calculates time left until a date", () => {
    const futureTime = new Date(Date.now() + 1000 * 60 * 60 * 24); // 1 day from now
    const now = new Date();
    const result = timeLeft(now, futureTime);

    expect(result.d).toBe(1);
    expect(result.h).toBeLessThanOrEqual(23); // Hours can be less due to the test execution time
    expect(result.m).toBeLessThanOrEqual(59); // Minutes can be less due to the test execution time
    expect(result.s).toBeLessThanOrEqual(59); // Seconds can be less due to the test execution time
  });
});
