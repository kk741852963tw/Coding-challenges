/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var a = 0;
  for(var i = 0 ; i < s.length ; i++){
    if(s[i] === 'I'){
      if(s[i+1] === 'V' || s[i+1] === 'X'){
        a += -1
      }else{
        a += 1;
      }
    }else if(s[i] === 'V'){
      a += 5;
    }else if(s[i] === 'X'){
      if(s[i+1] === 'L' || s[i+1] === 'C'){
        a += -10
      }else{
        a += 10;
      }
    }else if(s[i] === 'L'){
      a += 50;
    }else if(s[i] === 'C'){
      if(s[i+1] === 'D' || s[i+1] === 'M'){
        a += -100
      }else{
        a += 100;
      }
    }else if(s[i] === 'D'){
      a += 500;
    }else{
      a += 1000;
    }
  }
  return a;
};


// /**
//  * Given a roman numeral as input, write a function that converts the roman
//  * numeral to a number and outputs it.
//  *
//  * Ex:
//  * translateRomanNumeral("LX") // 60
//  *
//  * When a smaller numeral appears before a larger one, it becomes
//  * a subtractive operation. You can assume only one smaller numeral
//  * may appear in front of larger one.
//  *
//  * Ex:
//  * translateRomanNumeral("IV") // 4
//  *
//  * You should return `null` if the input is not a string. You can expect
//  * all non-empty string inputs to be valid roman numerals.
//  */

//  var DIGIT_VALUES = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000
// };

// var translateRomanNumeral = function(romanNumeral) {
// // TODO: Implement me!
//   if (typeof romanNumeral !== 'string') {
//     return null;
//   }
//   let result = 0;
//   for (let i = 0; i < romanNumeral.length; i++) {
//     if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i + 1]] && i < romanNumeral.length - 1) {
//       result -= DIGIT_VALUES[romanNumeral[i]];
//     } else {
//       result += DIGIT_VALUES[romanNumeral[i]];
//     }
//   }
//   return result;
// };
