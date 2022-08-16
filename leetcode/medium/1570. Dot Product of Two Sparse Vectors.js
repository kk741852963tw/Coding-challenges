/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
  this.array = nums;
};

// Return the dotProduct of two sparse vectors
/**
* @param {SparseVector} vec
* @return {number}
*/
SparseVector.prototype.dotProduct = function(vec) {
  let result = 0;
  for (let i = 0; i < vec.array.length; i++) {
      result += vec.array[i] * this.array[i];
  }
  return result;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);