/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var phoneDigitsToLetters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };
  if (digits.length === 0) {
    return [];
  }
  var result = [];
  var test = function(input, n) {
    if (n === digits.length) {
      result.push(input);
      return;
    }
    for (var i = 0; i < phoneDigitsToLetters[digits[n]].length; i++) {
      var temp1 = '';
      temp1 += phoneDigitsToLetters[digits[n]][i];
      var temp2 = input + temp1;
      test(temp2, n + 1);
    }
  }
  test('', 0);
  return result;
};

// /*
//   * Each number key on a standard phone keypad has a set of Latin letters written on
//   * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
//   *
//   * Businesses often try to come up with clever ways to spell out their phone number
//   * in advertisements to make it more memorable. But there are a lot of combinations!
//   *
//   * Write a function that takes up to four digits of a phone number, and
//   * returns a list of all of the words that can be written on the phone with
//   * that number. (You should return all permutations, not only English words.)
//   *
//   * Example:
//   *   telephoneWords('2745');
//   *   => ['APGJ',
//   *        'APGK',
//   *        'APGL',
//   *        ..., // many many more of these
//   *        'CSIL']
//   *
//   * Tips:
//   *   - Phone numbers are strings! (A phone number can start with a zero.)
//   *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
//   *   - Don't return every combination of those digits in any order, just the order given.
//   *
//   *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
//   *  Why not filter your results to only return words contained in that file?
//   *
//   */

// var phoneDigitsToLetters = {
//   0: '0',
//   1: '1',
//   2: 'ABC',
//   3: 'DEF',
//   4: 'GHI',
//   5: 'JKL',
//   6: 'MNO',
//   7: 'PQRS',
//   8: 'TUV',
//   9: 'WXYZ'
// };

// var telephoneWords = function(digitString) {
//   var result = [];
//   var test = function(input, n) {
//     if (n === digitString.length) {
//       result.push(input);
//       return;
//     }
//     for (var i = 0; i < phoneDigitsToLetters[digitString[n]].length; i++) {
//       var temp1 = '';
//       temp1 += phoneDigitsToLetters[digitString[n]][i];
//       var temp2 = input + temp1;
//       test(temp2, n + 1);
//     }
//   }
//   test('', 0);
//   return result;
// };


// // var telephoneWords = function(digitString) {
// //   // TODO: return every combination that can be spelled on a phone with these digits
// //   var result = [];

// //   for (var i = 0; i < digitString.length; i++) {
// //     var n = 0;
// //     var array = result.slice();
// //     while (n < phoneDigitsToLetters[digitString[i]].length - 1) {
// //       result = result.concat(array);
// //       n++;
// //     }
// //     n = 0;
// //     for (var j = 0; j < phoneDigitsToLetters[digitString[i]].length; j++) {
// //       if (i === 0) {
// //         result.push(phoneDigitsToLetters[digitString[i]][j]);
// //       } else {
// //         for (var k = n * array.length; k < array.length * (n + 1); k++) {
// //           result[k] += phoneDigitsToLetters[digitString[i]][j];
// //         }
// //       }
// //       n++;
// //     }
// //   }

// //   return result;
// // };
