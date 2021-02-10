class Parser {
  constructor() {
    this.VARIABLES = [
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "n",
      "m",
    ];
    this.NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    this.OPERATORS = ["+", "=", "-", "*", "/", "^"];
    this.BRACKETS = ["[", "]", "(", ")"];
  }

  isNumber(x) {
    return this.NUMBERS.includes(x);
  }

  isOp(x) {
    return this.OPERATORS.includes(x);
  }

  isBracket(x) {
    return this.BRACKETS.includes(x);
  }

  isVar(x) {
    return this.VARIABLES.includes(x);
  }

  all(x) {
    return {
      token: x,
      number: this.isNumber(x),
      operator: this.isOp(x),
      bracket: this.isBracket(x),
      variable: this.isVar(x),
    }
  }
}

module.exports = Parser;
