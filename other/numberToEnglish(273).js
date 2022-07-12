/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  // return my value as english words
  if (this.valueOf() === 0) {
    return 'zero';
  }
  var arrayNumber = [];
  var arrayNumberDigit = [];
  var input = this.valueOf().toString().split('.');
  var inputInt = Number(input[0]);
  var inputMod = Number(input[1]);
  while (inputInt > 0) {
    var int = Math.floor(inputInt / 1000);
    var module = inputInt % 1000;
    arrayNumber.push(module);
    inputInt = int;
  }
  if (input[1] !== undefined) {
    var leng = input[1].length;
    var index = 0;
    var digit = '';
    var digitKey = '';
    if (leng === 1) {
      digit = 'tenth';
    } else if (leng === 2) {
      digit = 'hundredth';
    } else {
      for (let key in numbersToPlace) {
        if (key.length - 1 <= leng) {
          digit = numbersToPlace[key] + 'th';
          digitKey = key;
        }
      }
      if (leng - digitKey.length === 1) {
        digit = 'hundred-' + digit;
      } else if (leng - digitKey.length === 0) {
        digit = 'ten-' + digit;
      }
    }
    while (inputMod > 0) {
      var int = Math.floor(inputMod / 1000);
      var module = inputMod % 1000;
      arrayNumberDigit.push(module);
      inputMod = int;
    }
    var arrayEnglishDigit = [];
    for (let i = 0; i < arrayNumberDigit.length; i++) {
      var temp = '';
      if (arrayNumberDigit[i] >= 100) {
        temp += numbersToWords[arrayNumberDigit[i].toString()[0]] + ' hundred';
        if (arrayNumberDigit[i] % 100 !== 0) {
          temp += ' ';
        }
      }
      if (arrayNumberDigit[i] % 100 > 19) {
        var number = arrayNumberDigit[i] % 100
        temp += numbersToWords[number.toString()[0] + '0'];
        if (number.toString()[1] !== '0') {
          temp += '-' + numbersToWords[number.toString()[1]];
        }
      } else if (arrayNumberDigit[i] % 100 > 0) {
        var number = arrayNumberDigit[i] % 100
        temp += numbersToWords[number.toString()];
      }
      arrayEnglishDigit.push(temp);
    }
    var resultDigit = '';
    for (let i = arrayEnglishDigit.length - 1; i >= 0; i--) {
      if (i > 0) {
        if (arrayEnglishDigit[i] !== '') {
          resultDigit += arrayEnglishDigit[i] + ' ' + numbersToPlace[(1000 ** i)];
        }
        if (arrayEnglishDigit[i - 1] !== '') {
          resultDigit += ' ';
        }
      } else {
        resultDigit += arrayEnglishDigit[i];
      }
    }
  }
  var arrayEnglish = [];
  for (let i = 0; i < arrayNumber.length; i++) {
    var temp = '';
    if (arrayNumber[i] >= 100) {
      temp += numbersToWords[arrayNumber[i].toString()[0]] + ' hundred';
      if (arrayNumber[i] % 100 !== 0) {
        temp += ' ';
      }
    }
    if (arrayNumber[i] % 100 > 19) {
      var number = arrayNumber[i] % 100
      temp += numbersToWords[number.toString()[0] + '0'];
      if (number.toString()[1] !== '0') {
        temp += '-' + numbersToWords[number.toString()[1]];
      }
    } else if (arrayNumber[i] % 100 > 0) {
      var number = arrayNumber[i] % 100
      temp += numbersToWords[number.toString()];
    }
    arrayEnglish.push(temp);
  }
  var result = '';
  for (let i = arrayEnglish.length - 1; i >= 0; i--) {
    if (i > 0) {
      if (arrayEnglish[i] !== '') {
        result += arrayEnglish[i] + ' ' + numbersToPlace[(1000 ** i)];
      }
      if (arrayEnglish[i - 1] !== '') {
        result += ' ';
      }
    } else {
      result += arrayEnglish[i];
    }
  }
  if (input[1] === undefined) {
    return result;
  } else if (result === '') {
    if (Number(input[1] > 1)) {
      return resultDigit + ' ' + digit + 's';
    } else {
      return resultDigit + ' ' + digit
    }
  } else {
    if (Number(input[1] > 1)) {
      return result + ' and ' + resultDigit + ' ' + digit + 's';
    } else {
      return result + ' and ' + resultDigit + ' ' + digit;
    }
  }
};
