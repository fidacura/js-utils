jest.useFakeTimers();
const { countdownTimer } = require("../countdownTimer");

describe("countdownTimer", () => {
  beforeEach(() => {
    jest.spyOn(global, "clearInterval");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("calculates remaining time correctly and calls update callback", () => {
    const mockCallback = jest.fn();
    const futureDate = new Date(Date.now() + 1000 * 60 * 60 * 24); // 1 day from now

    countdownTimer(futureDate, mockCallback);

    jest.advanceTimersByTime(1000); // Advance timer by 1 second

    expect(mockCallback).toHaveBeenCalledWith({
      days: 0,
      hours: 23,
      minutes: 59,
      seconds: 59,
    });

    jest.advanceTimersByTime(1000 * 60 * 60 * 24); // Advance timer by 1 day

    expect(mockCallback).toHaveBeenLastCalledWith({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    expect(clearInterval).toHaveBeenCalled();
  });
});
