const { shuffleArray } = require("../shuffleArray");

describe("shuffleArray", () => {
  test("returns an array with the same elements", () => {
    const array = [1, 2, 3, 4];
    const shuffled = shuffleArray([...array]); // Clone to prevent modification of original
    expect(shuffled.sort()).toEqual(array.sort());
  });

  test("returns an array with elements in different order", () => {
    const array = [1, 2, 3, 4];
    const shuffled = shuffleArray([...array]); // Clone to prevent modification of original
    expect(shuffled).not.toEqual(array);
  });
});
