/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

 var longestRun = function (string) {
  // TODO: Your code here!
  if (string.length === 0) {
    return null;
  }
  var start = 0;
  var end = 0;
  var diff = end - start;
  var start_final = start;
  var end_final = end;
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      end = i + 1;
    } else {
      start = i + 1;
      end = i + 1;
    }
    if (end - start > diff) {
      start_final = start;
      end_final = end;
      diff = end - start;
    }
  }
  return [start_final, end_final];
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
