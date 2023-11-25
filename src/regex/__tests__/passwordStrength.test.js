const { passwordStrength } = require("../passwordStrength");

describe("passwordStrength", () => {
  test("evaluates weak passwords", () => {
    expect(passwordStrength("12345")).toBe("weak");
  });

  test("evaluates medium strength passwords", () => {
    expect(passwordStrength("1a2b3c")).toBe("medium");
  });

  test("evaluates strong passwords", () => {
    expect(passwordStrength("1aB$234")).toBe("strong");
  });
});
