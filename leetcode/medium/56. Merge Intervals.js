/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => { return a[0] - b[0] });
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] > result[result.length -1][1]) {
          result.push(intervals[i]);
      } else {
          const temp = result.slice(result.length -1);
          result.pop();
          result.push([Math.min(intervals[i][0], temp[0][0]), Math.max(intervals[i][1], temp[0][1])]);
      }
  }
  return result;
};