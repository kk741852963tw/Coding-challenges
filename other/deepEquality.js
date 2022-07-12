/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {

  var test = function(input) {
    var obj = {};
    var keys = Object.keys(input).sort();
    for (var i = 0; i < keys.length; i++) {
      if (typeof input[keys[i]] === 'object') {
        obj[keys[i]] = test(input[keys[i]]);
      } else {
        obj[keys[i]] = input[keys[i]];
      }
    }
    return obj;
  }

  var input1 = JSON.stringify(test(apple));
  var input2 = JSON.stringify(test(orange));
  return input1 === input2;
};
