const { checkWebGLSupport } = require("../checkWebGLSupport");

describe("checkWebGLSupport", () => {
  beforeEach(() => {
    // Mocking document.createElement and getContext
    document.createElement = jest.fn(() => ({
      getContext: jest.fn((contextType) => {
        if (contextType === "webgl" || contextType === "experimental-webgl") {
          return {}; // Mock WebGL context
        }
        return null;
      }),
    }));
  });

  test("returns true when WebGL support is available", () => {
    expect(checkWebGLSupport()).toBeTruthy();
  });

  test("returns false when WebGL support is not available", () => {
    document.createElement().getContext.mockImplementation(() => null);
    expect(checkWebGLSupport()).toBeFalsy();
  });

  test("returns false on exceptions", () => {
    document.createElement = jest.fn(() => {
      throw new Error("Error creating element");
    });
    expect(checkWebGLSupport()).toBeFalsy();
  });
});
