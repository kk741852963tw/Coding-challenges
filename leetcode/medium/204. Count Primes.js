/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  var prime = [];
  var primeTester = function(n) {
    if (n === 2 || n === 3) {
      return true;
    }
    const sqrt = Math.floor(Math.sqrt(n));
    for (let j = 0; j < prime.length; j++) {
      if (prime[j] > sqrt) {
        break;
      }
      if (n % prime[j] === 0) {
        return false
      }
    }
    return true;
  };
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (primeTester(i)) {
      prime.push(i);
      count++;
    }
  }
  return count;
};