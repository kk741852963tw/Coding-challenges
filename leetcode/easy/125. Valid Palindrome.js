/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // var temp = s.toLowerCase();
  // var reverse = '';
  // var noreverse = ''
  // for (let i = temp.length - 1; i >= 0; i--) {
  //     if ((47 < temp[i].charCodeAt(0) && temp[i].charCodeAt(0) < 58) || (96 < temp[i].charCodeAt(0) && temp[i].charCodeAt(0) < 123)) {
  //         reverse += temp[i];
  //     }
  // }
  // for (let i = 0; i < temp.length; i++) {
  //     if ((47 < temp[i].charCodeAt(0) && temp[i].charCodeAt(0) < 58) || (96 < temp[i].charCodeAt(0) && temp[i].charCodeAt(0) < 123)) {
  //         noreverse += temp[i];
  //     }
  // }
  // if (reverse === noreverse) {
  //     return true;
  // } else {
  //     return false;
  // }
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
      if (left === right) {
          return true;
      }
      if (left === right - 1) {
          if ((!(47 < s.charCodeAt(left) && s.charCodeAt(left) < 58) && !(96 < s.charCodeAt(left) && s.charCodeAt(left) < 123)) || (!(47 < s.charCodeAt(right) && s.charCodeAt(right) < 58) && !(96 < s.charCodeAt(right) && s.charCodeAt(right) < 123))) {
              return true;
          }
          if (s[left] === s[right]) {
              return true;
          } else {
              return false;
          }
      }
      if (!(47 < s.charCodeAt(left) && s.charCodeAt(left) < 58) && !(96 < s.charCodeAt(left) && s.charCodeAt(left) < 123)) {
          left++;
          continue;
      }
      if (!(47 < s.charCodeAt(right) && s.charCodeAt(right) < 58) && !(96 < s.charCodeAt(right) && s.charCodeAt(right) < 123)) {
          right--;
          continue;
      }
      if (s[left] === s[right]) {
          left++;
          right--;
      } else {
          return false;
      }
  }
};