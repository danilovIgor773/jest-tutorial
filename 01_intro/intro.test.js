const { sum, nativeNull } = require("./intro");

//to join your testing functions into separate blocks use describe

describe("Sum function:", () => {
  test("should output the summ of two numbers", () => {
    const sumResult = sum(4, 6);
    expect(sumResult).toBe(10);
    expect(sumResult).toEqual(10);
  });

  test("should correctly match its return value", () => {
    expect(sum(1, 3)).toBeGreaterThan(2);
    expect(sum(1, 3)).toBeGreaterThanOrEqual(4);
    expect(sum(1, 3)).toBeLessThan(5);
    expect(sum(1, 3)).toBeLessThanOrEqual(4);
  });

  test("sum function should summ 2 float values correctly", () => {
    expect(sum(0.1, 0.4)).toBeCloseTo(0.5);
  });
});
describe("NativeNull function:", () => {
  test("should return false value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});
