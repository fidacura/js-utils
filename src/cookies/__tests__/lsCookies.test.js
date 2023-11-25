import { lsCookies } from "../lsCookies";

describe("lsCookies", () => {
  beforeEach(() => {
    // Clear existing cookies
    document.cookie.split(";").forEach((cookie) => {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date(0).toUTCString());
    });

    // Set cookies individually
    document.cookie = "username=JohnDoe";
    document.cookie = "token=123abc";
  });

  it("lists all cookies stored in the browser", () => {
    const cookies = lsCookies();
    expect(cookies.username).toBe("JohnDoe");
    expect(cookies.token).toBe("123abc");
  });
});
