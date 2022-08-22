/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let max = 0;
  for (let i = 0; i < piles.length; i++) {
      if (max < piles[i]) {
          max = piles[i];
      }
  }
  let left = 1;
  let right = max;
  let result = Infinity;
  while (left < right) {
      let count = 0;
      const mid = Math.floor((left + right) / 2);
      for (let i = 0; i < piles.length; i++) {
          count += Math.ceil(piles[i] / mid);
      }
      if (count > h) {
          left = mid + 1;
      } else {
          if (result > mid) {
              result = mid;
          }
          right = mid;
      }
  }
  return result !== Infinity ? result : left;
};