/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // var quicksort = function(array) {
  //   if (array.length === 2) {
  //     if (array[0] > array[1]) {
  //       var temp = array[0];
  //       array[0] = array[1];
  //       array[1] = temp;
  //     }
  //     return array;
  //   }
  //   if (array.length === 1) {
  //     return array;
  //   }
  //   if (array.length === 0) {
  //     return [];
  //   }
  //   var pivot = array[0];
  //   var result = [];
  //   var large = [];
  //   var small = [];
  //   for (var i = 1; i < array.length; i++) {
  //     if (array[i] > pivot) {
  //       large.push(array[i]);
  //     } else {
  //       small.push(array[i]);
  //     }
  //   }
  //   result = result.concat(quicksort(small));
  //   result.push(pivot);
  //   result = result.concat(quicksort(large));
  //   return result;
  // };
  // const result = quicksort(nums);
  // return result[result.length - k];
  k = nums.length - k;
  function quickSelect(l, r) {
      const pivot = nums[r];
      let p = l;
      let i = l;
      let temp;
      while (i >= l && i < r) {
          if (nums[i] <= pivot) {
              temp = nums[p];
              nums[p] = nums[i];
              nums[i] = temp;
              p++;
          }
          i++;
      }
      temp = nums[p];
      nums[p] = nums[r];
      nums[r] = temp;
      if (p > k) {
          return quickSelect(l, p - 1);
      } else if (p < k) {
          return quickSelect(p + 1, r);
      } else {
          return nums[p];
      }
  }
  return quickSelect(0, nums.length - 1)
};