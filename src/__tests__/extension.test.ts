import {
  findAllTextBeforeLeftBracket,
  findAllTextBeforeRightBracket,
  swapParameters,
  countCommasInText
} from "../helpers";

console.log = jest.fn();

describe("Utility functions", () => {
  const validString = `(this.param1, this.param2)`;
  const invalidString = `(this.param1 this.param2)`;
  test("Return all characters from cursor to left bracket", () => {
    const result = findAllTextBeforeLeftBracket(validString, 12);

    expect(result.leftText).toBe("this.param1,");
    expect(result.leftBracketIndex).toBe(0);
  });
  test("Return all characters from cursor to right bracketr", () => {
    const result = findAllTextBeforeRightBracket(validString, 13);
    expect(result.rightText).toBe(" this.param2");
    expect(result.rightBracketIndex).toBe(25);
  });
  test("Return all characters from cursor between parens", () => {
    const result = swapParameters(validString, 12);
    expect(result.text).toBe("this.param1, this.param2");
  });
  test("Throw an error if no comma is present in text selection", () => {
    expect(() => swapParameters(invalidString, 12)).toThrow(
      Error("Invalid selection, no commas between parens")
    );
  });
  test("Return count of commas in text", () => {
    const threeCommas = "Here, is, three commas, ";
    expect(countCommasInText(threeCommas)).toBe(3);
  });
  test("Throw an error if more than one comma is present in text selection", () => {
    const threeCommas = "Here, is, three commas, ";
    expect(() => swapParameters(threeCommas, 5)).toThrow(
      Error("Invalid selection, more than one parameter present between parens")
    );
  });
});
