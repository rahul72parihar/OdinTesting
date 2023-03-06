import { capitalize } from "./capitalize.js";

test("rahul -> Rahul", () => {
  expect(capitalize("rahul")).toBe("Rahul");
});

test("rahul Parihar -> rahul Parihar", () => {
  expect(capitalize("rahul Parihar")).toBe("rahul Parihar");
});

test("' parihar' -> ' parihar", () => {
  expect(capitalize(" parihar")).toBe(" parihar");
});
