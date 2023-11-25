const { deepCompare } = require("../deepCompare");

describe("deepCompare", () => {
  test("compares identical simple objects", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    expect(deepCompare(obj1, obj2)).toBeTruthy();
  });

  test("compares different simple objects", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    expect(deepCompare(obj1, obj2)).toBeFalsy();
  });

  test("compares identical nested objects", () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { b: 1 } };
    expect(deepCompare(obj1, obj2)).toBeTruthy();
  });

  test("compares different nested objects", () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { b: 2 } };
    expect(deepCompare(obj1, obj2)).toBeFalsy();
  });

  test("compares objects with different property counts", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1 };
    expect(deepCompare(obj1, obj2)).toBeFalsy();
  });

  test("compares identical arrays", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(deepCompare(arr1, arr2)).toBeTruthy();
  });

  test("compares different arrays", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(deepCompare(arr1, arr2)).toBeFalsy();
  });

  test("compares mixed types (objects and arrays)", () => {
    const obj1 = { a: [1, 2], b: { c: 3 } };
    const obj2 = { a: [1, 2], b: { c: 3 } };
    expect(deepCompare(obj1, obj2)).toBeTruthy();
  });

  test("compares with null and undefined", () => {
    expect(deepCompare(null, null)).toBeTruthy();
    expect(deepCompare(undefined, undefined)).toBeTruthy();
    expect(deepCompare(null, undefined)).toBeFalsy();
  });

  test("compares non-object inputs (primitives)", () => {
    expect(deepCompare(5, 5)).toBeTruthy();
    expect(deepCompare("string", "string")).toBeTruthy();
    expect(deepCompare(true, false)).toBeFalsy();
  });
});
