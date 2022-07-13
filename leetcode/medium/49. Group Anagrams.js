/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // var result = [[strs[0]]];
  // for (let i = 1; i < strs.length; i++) {
  //     var stemp = strs[i].split('').sort().join('');
  //     var check = false;
  //     for (let j = 0; j < result.length; j++) {
  //         var rtemp = result[j][0].split('').sort().join('');
  //         if (stemp === rtemp) {
  //             result[j].push(strs[i]);
  //             check = true;
  //             break;
  //         }
  //     }
  //     if (!check) {
  //         result.push([strs[i]]);
  //     }
  // }
  // return result;
  var obj = {};
  for (let i = 0; i < strs.length; i++) {
    var temp = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      temp[strs[i].charCodeAt(j) - "a".charCodeAt(0)]++;
    }
    if (!obj[temp.toString()]) {
      obj[temp.toString()] = [];
      obj[temp.toString()].push(strs[i]);
    } else {
      obj[temp.toString()].push(strs[i]);
    }
  }
  var result = [];
  for (let key in obj) {
    result.push(obj[key]);
  }
  return result;
};