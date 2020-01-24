import {
  findAllTextBeforeLeftBracket,
  findAllTextBeforeRightBracket,
  buildMethodSignature
} from "../helpers";
console.log = jest.fn();
describe("Utility functions", () => {
  const validString = `(this.param1, this.param2)`;
  const invalidString = `(this.param1 this.param2)`;
  test("Return all characters from cursor to left bracket", () => {
    const result = findAllTextBeforeLeftBracket(validString, 12);
    expect(result).toBe("this.param1,");
  });
  test("Return all characters from cursor to right bracketr", () => {
    const result = findAllTextBeforeRightBracket(validString, 13);
    expect(result).toBe(" this.param2");
  });
  test("Return all characters from cursor between parens", () => {
    const result = buildMethodSignature(validString, 12);
    expect(result).toBe("this.param1, this.param2");
  });
  test("Throw an error if no comma is present in text selection", () => {
    expect(() => buildMethodSignature(invalidString, 12)).toThrow(
      Error("Invalid selection, no commas between parens")
    );
  });
});
