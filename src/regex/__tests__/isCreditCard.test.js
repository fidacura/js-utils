const { isCreditCard } = require("../isCreditCard");

describe("isCreditCard", () => {
  test("validates a valid credit card number", () => {
    expect(isCreditCard("4111111111111111")).toBeTruthy(); // Valid VISA number
  });

  test("returns false for an invalid credit card number", () => {
    expect(isCreditCard("1234567890123456")).toBeFalsy();
  });

  test("ignores non-numeric characters", () => {
    expect(isCreditCard("4111-1111-1111-1111")).toBeTruthy(); // Valid VISA number with hyphens
  });
});
