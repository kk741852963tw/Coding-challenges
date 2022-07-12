/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let sLength = s.length;
  let pLength = p.length;
  let result = [];
  let sArr = new Array(26).fill(0);
  let pArr = new Array(26).fill(0);
  for (let i = 0; i < pLength; i++) {
    pArr[p.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < sLength; i++) {
    sArr[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    if (i >= pLength) {
      sArr[s.charCodeAt(i - pLength) - "a".charCodeAt(0)]--;
    }
    let isSame = true;
    for (let j = 0; j < 26; j++) {
      if (sArr[j] !== pArr[j]) {
        isSame = false;
        break;
      }
    }
    if (isSame) {
      result.push(i - pLength + 1);
    }
  }
  return result;
};
