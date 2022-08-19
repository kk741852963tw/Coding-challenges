/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let result = '';
  const stack = [];
  for (let i = 0; i < s.length; i++) {
      if (s[i] === ']') {
          let temp = '';
          while (stack[stack.length - 1] !== '[') {
              temp += stack[stack.length - 1];
              stack.pop();
          }
          stack.pop();
          const string = temp;
          let count = '';
          while (Number.isInteger(Number(stack[stack.length - 1]))) {
              count += stack[stack.length - 1];
              stack.pop();
          }
          count = Number(count.split('').reverse().join('')) - 1;
          while (count) {
              temp += string;
              count--;
          }
          for (let i = temp.length - 1; i >= 0; i--) {
              stack.push(temp[i]);
          }
      } else {
          stack.push(s[i]);
      }
  }
  for (let i = 0; i < stack.length; i++) {
      result += stack[i];
  }
  return result;
};