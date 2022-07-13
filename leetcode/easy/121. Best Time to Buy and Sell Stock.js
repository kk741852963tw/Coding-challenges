/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var min = prices[0];
  var max = prices[0];
  var result = max - min;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > max) {
      max = prices[i];
      if (result < max - min) {
        result = max - min;
      }
    } else if (prices[i] < min) {
      min = prices[i];
      max = prices[i];
    }
  }
  return result;
};