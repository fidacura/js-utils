import { debounce } from "../debounce";

jest.useFakeTimers();

describe("debounce", () => {
  it("calls function only after specified delay", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    debouncedFunc();
    jest.advanceTimersByTime(500); // Halfway through the delay
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500); // Completing the delay
    expect(func).toHaveBeenCalledTimes(1);
  });
});
