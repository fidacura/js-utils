const { mobileCheck } = require("../mobileCheck");

describe("mobileCheck", () => {
  const originalUserAgent = navigator.userAgent;

  afterEach(() => {
    Object.defineProperty(navigator, "userAgent", {
      value: originalUserAgent,
      configurable: true,
    });
  });

  const testCases = [
    {
      ua: "Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012)",
      expected: true,
    },
    {
      ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      expected: false,
    },
    // Add more test cases here for different user agents
  ];

  testCases.forEach(({ ua, expected }) => {
    test(`returns ${expected} for user agent: ${ua}`, () => {
      Object.defineProperty(navigator, "userAgent", {
        value: ua,
        configurable: true,
      });
      expect(mobileCheck()).toBe(expected);
    });
  });
});
