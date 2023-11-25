const { checkWebPSupport } = require("../checkWebPSupport");

describe("checkWebPSupport", () => {
  beforeEach(() => {
    // Mocking document.createElement
    document.createElement = jest.fn().mockReturnValue({
      getContext: jest.fn().mockReturnValue({}),
      toDataURL: jest.fn(),
    });
  });

  test("returns true when WebP support is available", () => {
    document.createElement().toDataURL.mockImplementation((type) => {
      return type === "image/webp" ? "data:image/webp" : "data:image/png";
    });

    expect(checkWebPSupport()).toBeTruthy();
  });

  test("returns false when WebP support is not available", () => {
    document
      .createElement()
      .toDataURL.mockImplementation(() => "data:image/png");

    expect(checkWebPSupport()).toBeFalsy();
  });

  test("returns false in very old browsers without canvas support", () => {
    document.createElement = jest.fn().mockReturnValue({});

    expect(checkWebPSupport()).toBeFalsy();
  });
});
