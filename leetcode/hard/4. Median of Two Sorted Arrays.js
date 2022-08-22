/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const canSwap = nums2.length < nums1.length;
  if (canSwap) [nums1, nums2] = [nums2, nums1];
  let [ left, right ] = [ 0, nums1.length - 1 ];
  const totalLength = nums1.length + nums2.length
  const mid = totalLength >> 1; //Math.floor(totalLength / 2)
  const isEven = (totalLength % 2) === 0;
  while (true) {
      const i = (left + right) >> 1;
      const j = mid - i - 2;
      i >= 0 ? Aleft = nums1[i] : Aleft = -Infinity;
      i + 1 < nums1.length ? Aright = nums1[i + 1] : Aright = Infinity;
      j >= 0 ? Bleft = nums2[j] : Bleft = -Infinity;
      j + 1 < nums2.length ? Bright = nums2[j + 1] : Bright = Infinity;
      if (Aleft <= Bright && Bleft <= Aright) {
          if (totalLength % 2) {
              return Math.min(Aright, Bright);
          }
          return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
      }
      if (Aleft > Bright) {
          right = i - 1; //right--
      } else {
          left = i + 1; //left++
      }
  }
};