/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

 var toFraction = function(number) {
  // Your code here
  if (Number.isInteger(number)) {
    return number.toString() + '/1';
  }
  var help = function(input1, input2) {
    var reminder = input1 % input2;
    input1 = input2;
    input2 = reminder;
    while (reminder !== 0) {
      reminder = input1 % input2;
      input1 = input2;
      input2 = reminder;
    }
    return input1;
  }
  var array = number.toString().split('.');
  var digit = array[1].length;
  var fraction = help(Number(array[0] + array[1]),  10 ** digit);
  return (Number(array[0] + array[1]) / fraction).toString() + '/' + ( 10 ** digit / fraction).toString();

};
