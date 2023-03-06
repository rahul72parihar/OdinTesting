import { add, subtract, divide, multiply } from "./calculator";

test("3 + 6 to equal 9", () => {
  expect(add(3, 6)).toEqual(9);
});

test("2 - 2 to equal 0", () => {
  expect(subtract(2, 2)).toEqual(0);
});

test("3 * 5 to equal 15", () => {
  expect(multiply(3, 5)).toEqual(15);
});

test("10 / 5 to equal 2", () => {
  expect(divide(10, 5)).toEqual(2);
});
