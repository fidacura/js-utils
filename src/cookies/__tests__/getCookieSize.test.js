import { getCookieSize } from "../getCookieSize";

describe("getCookieSize", () => {
  it("calculates the size of all cookies", () => {
    document.cookie = "username=JohnDoe; token=123abc";
    expect(getCookieSize()).toBeGreaterThan(0);
  });
});
