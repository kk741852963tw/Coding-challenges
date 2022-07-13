/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var temp = s.toLowerCase();
  var reverse = '';
  var noreverse = ''
  for (let i = temp.length - 1; i >= 0; i--) {
    if ((47 < temp[i].charCodeAt(0) && temp[i].charCodeAt(0) < 58) || (96 < temp[i].charCodeAt(0) && temp[i].charCodeAt(0) < 123)) {
      reverse += temp[i];
    }
  }
  for (let i = 0; i < temp.length; i++) {
    if ((47 < temp[i].charCodeAt(0) && temp[i].charCodeAt(0) < 58) || (96 < temp[i].charCodeAt(0) && temp[i].charCodeAt(0) < 123)) {
      noreverse += temp[i];
    }
  }
  if (reverse === noreverse) {
    return true;
  } else {
    return false;
  }
};