/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  // let max = 0;
  // for (let i = 0; i < heights.length; i++) {
  //     if (max < heights[i]) {
  //         max = heights[i];
  //     }
  //     let min = heights[i];
  //     for (let j = i + 1; j < heights.length; j++) {
  //         if (min > heights[j]) {
  //             min = heights[j];
  //         }
  //         const area = min * (j - i + 1);
  //         if (max < area) {
  //             max = area;
  //         }
  //     }
  // }
  // return max;
  let area = 0;
  const stack = [];
  for (let i = 0; i < heights.length; i++) {
      let start = i;
      while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
          let [lasti, lasth] = stack.pop();
          area = Math.max(area, lasth * (i - lasti));
          start = lasti;
      }
      stack.push([start, heights[i]]);
  }
  for (let i = 0; i < stack.length; i++) {
      area = Math.max(area, stack[i][1] * (heights.length - stack[i][0]));
  }
  return area;
};