// Equation parser
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

  /**
   * 
   * @param x {any} token
   * @returns {boolean}
   */
  isNumber(x) {
    return this.NUMBERS.includes(x);
  }

  /**
   * 
   * @param x {any} token
   * @returns {boolean}
   */
  isOp(x) {
    return this.OPERATORS.includes(x);
  }

  /**
   * 
   * @param x {any} token
   * @returns {boolean}
   */
  isBracket(x) {
    return this.BRACKETS.includes(x);
  }

  /**
   * 
   * @param x {any} token
   * @returns {boolean}
   */
  isVar(x) {
    return this.VARIABLES.includes(x);
  }

  /**
   * 
   * @param x {any} token
   * @returns {boolean}
   */
  all(x) {
    return {
      token: x,
      number: this.isNumber(x),
      operator: this.isOp(x),
      bracket: this.isBracket(x),
      variable: this.isVar(x),
    }
  }

  /****/

  /**
   * 
   * @param problem {string}
   * @returns {number}
   */
  numsLen(problem) {
    var len = 0;

    for (let i = 0; i < problem.split("").length; i++) {
      if(this.isNumber(problem.split("")[i])) {
        len += 1;
      } else {
        continue;
      }
    }
    return len;
  }

  /**
   * 
   * @param problem {string}
   * @returns {string[] | number[]}
   */
  nums(problem) {
    var numbers = [];

    for (let i = 0; i < problem.split("").length; i++) {
      if(this.isNumber(problem.split("")[i])) {
        numbers.push(problem.split("")[i]);
      } else {
        continue;
      }
    }
    return numbers;
  }

  /**
   * 
   * @param problem {string}
   * @returns {number}
   */
  opsLen(problem) {
    var len = 0;

    for (let i = 0; i < problem.split("").length; i++) {
      if(this.isOp(problem.split("")[i])) {
        len += 1;
      } else {
        continue;
      }
    }
    return len;
  }

  /**
   * 
   * @param problem {string}
   * @returns {string[] | number[]}
   */
  ops(problem) {
    var operators = [];

    for (let i = 0; i < problem.split("").length; i++) {
      if(this.isOp(problem.split("")[i])) {
        operators.push(problem.split("")[i]);
      } else {
        continue;
      }
    }
    return operators;
  }

  /**
   * 
   * @param problem {string}
   * @returns {number}
   */
  brLen(problem) {
    var len = 0;

    for (let i = 0; i < problem.split("").length; i++) {
      if(this.isBracket(problem.split("")[i])) {
        len += 1;
      } else {
        continue;
      }
    }
    return len;
  }

  /**
   * 
   * @param problem {string}
   * @returns {string[] | number[]}
   */
  brs(problem) {
    var brackets = [];

    for (let i = 0; i < problem.split("").length; i++) {
      if(this.isBracket(problem.split("")[i])) {
        brackets.push(problem.split("")[i]);
      } else {
        continue;
      }
    }
    return brackets;
  }

  /**
   * 
   * @param problem {string}
   * @returns {number}
   */
  varsLen(problem) {
    var len = 0;

    for (let i = 0; i < problem.split("").length; i++) {
      if(this.isVar(problem.split("")[i])) {
        len += 1;
      } else {
        continue;
      }
    }
    return len;
  }

  /**
   * 
   * @param problem {string}
   * @returns {string[] | number[]}
   */
  vars(problem) {
    var variables = [];

    for (let i = 0; i < problem.split("").length; i++) {
      if(this.isVar(problem.split("")[i])) {
        variables.push(problem.split("")[i]);
      } else {
        continue;
      }
    }
    return variables;
  }

  /****/

  calculate(problem) {
    var numbers = this.nums(problem);
    var operators = this.ops(problem);
    var brackets = this.brs(problem);
    var variables = this.vars(problem);

    for (let i = 0; i < numbers.length; i++) {
      numbers[i] = parseInt(numbers[i], 10);
    }

    function numbersTotal() {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return numbers.reduce(reducer);
    }

    return numbersTotal();
  }

  /****/

  split(problem) {
    let list = problem.split("=");
    return {
      problem: list[0],
      answer: list[1]
    };
  }
}

module.exports = Parser;
