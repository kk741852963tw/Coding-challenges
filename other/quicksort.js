/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


 var quicksort = function(array) {
  if (array.length === 2) {
    if (array[0] > array[1]) {
      var temp = array[0];
      array[0] = array[1];
      array[1] = temp;
    }
    return array;
  }
  if (array.length === 1) {
    return array;
  }
  if (array.length === 0) {
    return [];
  }
  var pivot = array[0];
  var result = [];
  var large = [];
  var small = [];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > pivot) {
      large.push(array[i]);
    } else {
      small.push(array[i]);
    }
  }
  result = result.concat(quicksort(small));
  result.push(pivot);
  result = result.concat(quicksort(large));
  return result;
};
