/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  if (s1.length !== s2.length) {
      return false;
  }
  let i = 0;
  let check = false;
  while (i < s1.length) {
      if (s1[i] === s2[i]) {
          i++;
          continue;
      }
      if (check) {
          return false;
      }
      let index = -1;
      for (let j = i + 1; j < s2.length; j++) {
          if (s2[j] === s1[i] && s1[j] === s2[i]) {
              index = j;
          }
      }
      if (index === -1) {
          return false;
      } else {
          let temp = s2[i];
          s2 = s2.substring(0, i) + s1[i] + s2.substring(i + 1, index) + temp + s2.substring(index + 1);
          check = true;
      }
  }
  return true;
};