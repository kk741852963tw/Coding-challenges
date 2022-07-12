/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  if (words.length === 1) {
    return words[0].split('');
  }
  var result = [];
  var s = new Array(26).fill(0);
  for (let i = 0; i < words[0].length; i++) {
    s[words[0].charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  for (let i = 1; i < words.length; i++) {
    var p = new Array(26).fill(0);
    for (let j = 0; j < words[i].length; j++) {
      p[words[i].charCodeAt(j) - "a".charCodeAt(0)]++;
    }
    for (let j = 0; j < s.length; j++) {
      if (s[j] > 0) {
        if (s[j] > p[j]) {
          s[j] = p[j];
        }
      }
    }
  }
  for (let j = 0; j < s.length; j++) {
    while (s[j] > 0) {
      result.push(String.fromCharCode(j +  "a".charCodeAt(0)));
      s[j]--;
    }
  }
  return result;
};

/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



//  var commonCharacters = function(...args) {
//   // TODO: Your code here!
//   let temp = args.slice(1);
//   let array_nospace = args[0].split(' ').join('').split('');
//   let array_noduplicate = [...new Set(array_nospace)];
//   for (var i = 0; i < array_noduplicate.length; i++) {
//     for (var j = 0; j < temp.length; j++) {
//       if (!temp[j].includes(array_noduplicate[i])) {
//         array_noduplicate.splice(i, 1);
//         i--;
//         break;
//       }
//     }
//   }
//   let result = array_noduplicate.join('');
//   return result;
// };
