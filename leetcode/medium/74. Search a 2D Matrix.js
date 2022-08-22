/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // for (let i = 0; i < matrix.length; i++) {
  //     for (let j = 0; j < matrix[i].length; j++) {
  //         if (matrix[i][j] === target) {
  //             return true;
  //         }
  //     }
  // }
  // return false;
  var search = function(nums, target) {
      let low = 0;
      let high = nums.length - 1;
      while (low < high) {
          const middle = Math.floor((low + high) / 2);
          if (nums[middle] === target) return true;
          if (nums[low] <= nums[middle]) {
              if (target >= nums[low] && target < nums[middle]) {
                  high = middle;
              }
              else {
                  low = middle + 1;
              }
          }
          else {
              if (target > nums[middle] && target <= nums[high]) {
                  low = middle + 1;
              }
              else {
                  high = middle;
              }
          }
      }
      return nums[low] === target ? true : false;
  };
  if (matrix.length === 1) {
      return search(matrix[0], target);
  } else {
      let left = 0;
      let right = matrix.length - 1;
      while (left < right) {
          const mid = Math.floor((left + right) / 2);
          if (matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target) {
              return search(matrix[mid], target);
          }
          if (matrix[mid][0] > target) {
              right = mid;
              continue;
          }
          if (matrix[mid][matrix[mid].length - 1] < target) {
              left = mid + 1;
              continue;
          }
      }
      return search(matrix[left], target);
  }
};