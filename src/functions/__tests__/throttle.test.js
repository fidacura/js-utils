import { throttle } from "../throttle";

jest.useFakeTimers();

describe("throttle", () => {
  it("calls function at most once within time frame", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();
    throttledFunc();
    jest.advanceTimersByTime(500); // Within throttle timeframe
    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500); // After throttle timeframe
    expect(func).toHaveBeenCalledTimes(1); // Still should be called only once
  });
});
