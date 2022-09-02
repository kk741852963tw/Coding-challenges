/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
      let max1 = stones.pop();
      let max2 = stones.pop();
      if (max1 !== max2) {
          let diff = max1 - max2;
          let left = 0;
          let right = stones.length - 1;
          while (left <= right) {
              let mid = Math.floor((left + right) / 2);
              if (stones[mid] < diff) {
                  left = mid + 1;
              } else {
                  right = mid - 1;
              }
          }
          stones.splice(left, 0, diff);
      }
  }
  return !stones.length ? 0 : stones[0];
};