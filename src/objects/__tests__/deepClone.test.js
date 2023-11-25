const { deepClone } = require("../deepClone");

describe("deepClone", () => {
  test("clones a simple object", () => {
    const obj = { a: 1, b: 2 };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  test("clones a simple array", () => {
    const arr = [1, 2, 3];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
  });

  test("clones a nested object", () => {
    const obj = { a: { b: { c: 1 } } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj.a).not.toBe(obj.a);
  });

  test("clones a nested array", () => {
    const arr = [
      [1, 2],
      [3, 4],
    ];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr[0]).not.toBe(arr[0]);
  });

  test("clones a mixed nested structure (object and array)", () => {
    const mixed = { a: [1, { b: 2 }], c: 3 };
    const clonedMixed = deepClone(mixed);
    expect(clonedMixed).toEqual(mixed);
    expect(clonedMixed.a[1]).not.toBe(mixed.a[1]);
  });

  test("handles null and undefined inputs", () => {
    expect(deepClone(null)).toBeNull();
    expect(deepClone(undefined)).toBeUndefined();
  });

  test("returns non-object/non-array input as is", () => {
    expect(deepClone(5)).toBe(5);
    expect(deepClone("string")).toBe("string");
    expect(deepClone(true)).toBe(true);
  });

  // This test may need to be adjusted based on how the function should handle unsupported types
  test("throws error on unsupported types", () => {
    expect(() => deepClone(() => {})).toThrow(
      "Unable to copy obj! Its type isn't supported."
    );
  });
});
