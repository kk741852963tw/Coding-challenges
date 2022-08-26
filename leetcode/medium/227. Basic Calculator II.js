/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.split(' ').join('');
  const stack1 = [];
  let string = '';
  let temp;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '+' || s[i] === '-' || s[i] === '/' || s[i] === '*') {
          temp = Number(string);
          stack1.push(temp);
          stack1.push(s[i]);
          string = '';
      } else {
          string += s[i];
      }
  }
  temp = Number(string);
  stack1.push(temp);
  const stack = [];
  for (let i = 0; i < stack1.length; i++) {
      if (stack1[i] === '*') {
          temp = stack.pop();
          temp *= stack1[i + 1];
          stack.push(temp);
          i++;
          continue;
      }
      if (stack1[i] === '/') {
          temp = stack.pop();
          temp = Math.floor(temp /stack1[i + 1]);
          stack.push(temp);
          i++;
          continue;
      }
      stack.push(stack1[i]);
  }
  let result = stack[0];
  for (let i = 1; i < stack.length; i = i + 2) {
      if (stack[i] === '+') {
          result += stack[i + 1];
      } else {
          result -= stack[i + 1];
      }
  }
  return result;
};