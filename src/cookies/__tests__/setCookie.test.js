import { setCookie } from "../setCookie";

describe("setCookie", () => {
  it("sets a cookie with specified name, value, and expiration", () => {
    setCookie("username", "JohnDoe", 7);
    expect(document.cookie).toContain("username=JohnDoe");
  });
});
