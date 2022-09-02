/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const test = function(string) {
      const reverse = string.split('').reverse().join('');
      return reverse === string;
  };
  const res = [];
  const part = [];
  function dfs(i) {
      if (i >= s.length) {
          res.push(part.slice());
          return;
      }
      for (let j = i; j < s.length; j++) {
          if (test(s.substring(i, j + 1))) {
              part.push(s.slice(i, j + 1));
              dfs(j + 1);
              part.pop();
          }
      }
  };
  dfs(0);
  return res;
};