import { requestAnimationFrameFPS } from "../requestAnimationFrameFPS";

describe("requestAnimationFrameFPS", () => {
  // Mock requestAnimationFrame and cancelAnimationFrame
  beforeEach(() => {
    jest
      .spyOn(window, "requestAnimationFrame")
      .mockImplementation((cb) => setTimeout(cb, 0));
    jest
      .spyOn(window, "cancelAnimationFrame")
      .mockImplementation((id) => clearTimeout(id));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls animation frame with specified FPS", () => {
    const callback = jest.fn();
    const rafId = requestAnimationFrameFPS(callback, 30); // 30 FPS

    jest.advanceTimersByTime(1000 / 30);
    expect(callback).toHaveBeenCalledTimes(1);

    // Cleanup by canceling the animation frame
    window.cancelAnimationFrame(rafId);
  });
});
