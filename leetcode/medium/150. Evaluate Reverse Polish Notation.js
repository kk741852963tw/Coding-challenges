/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const OPERATORS = {
      '+': (a, b) => { return a + b },
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => Math.trunc(a / b),
  };
  const stack = [];
  for (const token of tokens) {
      if (token in OPERATORS) {
          const rhs = stack.pop();
          const lhs = stack.pop();
          stack.push(OPERATORS[token](lhs, rhs));
      } else {
          stack.push(Number(token));
      }
  }
  return stack.pop();
};