import { calculateDistance } from "../calculateDistance";

describe("calculateDistance", () => {
  it("calculates the distance between two points correctly", () => {
    expect(calculateDistance(0, 0, 3, 4)).toBe(5);
    expect(calculateDistance(-1, -1, 1, 1)).toBeCloseTo(2.828, 3);
  });

  it("returns 0 if both points are the same", () => {
    expect(calculateDistance(0, 0, 0, 0)).toBe(0);
  });
});
