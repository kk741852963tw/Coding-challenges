/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  var obj = {};
  var FIFO = 1;
  arr.forEach(function(element) {
    if (!obj[element]) {
      obj[element] = [1, FIFO];
    } else {
      obj[element][0] += 1;
    }
    FIFO += 1;
  });
  var obj2 = {};
  for (var key in obj) {
    if (obj[key][0] % 2 === 0) {
      obj2[key] = obj[key];
    }
  }
  var min = 10000;
  var result = [];
  for (var key in obj2) {
    if (obj2[key][1] < min) {
      min = obj2[key][1];
      result.push(key);
    }
  }
  if (result.length !== 0) {
    if (Number(result[result.length - 1])) {
      return parseInt(result[result.length - 1]);
    } else {
      return result[result.length - 1];
    }
  }
  return null;
};
