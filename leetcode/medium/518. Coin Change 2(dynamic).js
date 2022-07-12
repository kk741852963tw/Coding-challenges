/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  var dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let j = 0; j < coins.length; j++) {
    for (let i = 1; i <= amount; i++) {
      if (i - coins[j] >= 0) {
          dp[i] += dp[i - coins[j]];
      }
    }
  }
  return dp[amount];
};

/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

// var makeChange = function(total) {
//   var array = [1, 2, 5, 10, 20, 50, 100, 200];
//   var count = 0;
//   var test = function(input, n) {
//     if (input === 0) {
//       count++;
//       return;
//     } else if (input < 0) {
//       return;
//     }
//     for (var i = n; i < array.length; i++) {
//       var temp_dollar = input - array[i];
//       test(temp_dollar, i);
//     }
//   }
//   test(total, 0);
//   return count;
// };