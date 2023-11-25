import { getCookie } from "../getCookie";

describe("getCookie", () => {
  beforeEach(() => {
    document.cookie = "username=JohnDoe";
  });

  it("retrieves the value of a specified cookie", () => {
    expect(getCookie("username")).toBe("JohnDoe");
  });

  it("returns empty string for a non-existent cookie", () => {
    expect(getCookie("nonexistent")).toBe("");
  });
});
