const mult = require("../src/mult");

it("Should return correct mult", () => {
  const result = mult(5, 5);
  expect(result).toBe(25);
});
