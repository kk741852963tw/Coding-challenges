/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  let array = [];
  for (let i = 0; i < points.length; i++) {
      const dist = points[i][0] ** 2 + points[i][1] ** 2;
      array[i] = [points[i], dist];
  }
  array.sort((a, b) => a[1] - b[1]);
  const result = [];
  while (k) {
      result.push(array.shift()[0]);
      k--;
  }
  return result;
};