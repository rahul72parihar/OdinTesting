import { capitalize } from "./capitalize.js";

test("adds 1 + 2 to equal 3", () => {
  expect(capitalize("rahul")).toBe("Rahul");
  expect(capitalize("rahul Parihar")).toBe("Rahul Parihar");
  expect(capitalize(" parihar")).toBe(" parihar");
});
