/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function(n) {
  // TODO: your solution here
  var n = n || 3;
  if (n < 0 || typeof n !== 'number') {
    return [];
  }
  if (n === 1) {
    return ['R', 'P', 'S'];
  }
  var result = [];
  for (var i = 0; i < 3 ** n; i++) {
    if (i % 3 === 0) {
      result.push('R');
    } else if (i % 3 === 1) {
      result.push('P');
    } else {
      result.push('S');
    }
  }
  var count = 3;
  var loop = function(n) {
    if (n === 0) {
      return;
    }
    for (var i = 0; i < count; i++) {
      for (var j = 0; j < result.length / count; j++) {
        if (i % 3 === 1) {
          result[i * result.length / count + j] += 'R';
        } else if (i % 3 === 2) {
          result[i * result.length / count + j] += 'P';
        } else {
          result[i * result.length / count + j] += 'S';
        }
      }
    }
    count *= 3;
    n -= 1;
    loop(n);
  }
  loop(n - 1);
  return result;
};

