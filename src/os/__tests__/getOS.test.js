const { getOS } = require("../getOS");

describe("getOS", () => {
  const originalNavigator = { ...navigator };

  afterEach(() => {
    Object.defineProperty(window, "navigator", {
      value: originalNavigator,
      configurable: true,
    });
  });

  test("correctly identifies MacOS", () => {
    Object.defineProperty(window, "navigator", {
      value: { platform: "MacIntel", userAgent: "", appVersion: "" },
      configurable: true,
    });
    expect(getOS()).toBe("MacOS");
  });

  test('returns "Unknown" for non-identifiable operating systems', () => {
    Object.defineProperty(window, "navigator", {
      value: {
        platform: "UnknownPlatform",
        userAgent: "UnknownAgent",
        appVersion: "UnknownAppVersion",
      },
      configurable: true,
    });
    expect(getOS()).toBe("Unknown");
  });
});
