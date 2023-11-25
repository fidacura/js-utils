import { delCookie } from "../delCookie";

describe("delCookie", () => {
  it("deletes a cookie by name", () => {
    document.cookie = "username=JohnDoe";
    delCookie("username");
    expect(document.cookie).not.toContain("username=JohnDoe");
  });
});
