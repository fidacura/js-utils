import { mapRange } from "../mapRange";

describe("mapRange", () => {
  it("maps numbers correctly from one range to another", () => {
    expect(mapRange(5, 0, 10, 0, 100)).toBe(50);
    expect(mapRange(75, 50, 100, 0, 10)).toBe(5);
  });

  it("handles edge cases", () => {
    expect(mapRange(0, 0, 100, 0, 10)).toBe(0);
    expect(mapRange(100, 0, 100, 0, 10)).toBe(10);
  });
});
