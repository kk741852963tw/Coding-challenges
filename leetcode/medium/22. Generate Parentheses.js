/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];
  const stack = [];
  const help = function(open, close) {
      if (open === close && open === n) {
          result.push(stack.join(''));
      }
      if (open < n) {
          stack.push('(');
          help(open + 1, close)
          stack.pop();
      }
      if (close < open) {
          stack.push(')');
          help(open, close + 1);
          stack.pop();
      }
  }
  help(0, 0);
  return result;
};