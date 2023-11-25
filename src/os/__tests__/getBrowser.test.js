const { getBrowser } = require("../getBrowser");

describe("getBrowser", () => {
  const originalUserAgent = navigator.userAgent;

  afterEach(() => {
    Object.defineProperty(navigator, "userAgent", {
      value: originalUserAgent,
      configurable: true,
    });
  });

  const testCases = [
    {
      ua: "mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/58.0.3029.110 safari/537.36",
      expected: "Chrome: 58.0.3029.110",
    },
    // Add more test cases here for different browsers
  ];

  testCases.forEach(({ ua, expected }) => {
    test(`correctly identifies ${expected.split(":")[0]}`, () => {
      Object.defineProperty(navigator, "userAgent", {
        value: ua,
        configurable: true,
      });
      expect(getBrowser()).toBe(expected);
    });
  });

  test('returns "Unknown" for non-identifiable browsers', () => {
    Object.defineProperty(navigator, "userAgent", {
      value: "non-identifiable user agent",
      configurable: true,
    });
    expect(getBrowser()).toBe("Unknown");
  });
});
