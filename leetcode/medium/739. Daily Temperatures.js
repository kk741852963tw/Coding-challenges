/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  // const result = [];
  // for (let i = 0; i < temperatures.length - 1; i++) {
  //     let count = 1;
  //     for (let j = i + 1; j < temperatures.length; j++) {
  //         if (temperatures[i] < temperatures[j]) {
  //             result.push(count);
  //             break;
  //         } else if (j === temperatures.length - 1) {
  //             result.push(0);
  //         } else {
  //             count++;
  //         }
  //     }
  // }
  // result.push(0);
  // return result;
  const output = Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
      while (stack.length !== 0 && stack[stack.length - 1][0] < temperatures[i]) {
          const [temp, idx] = stack.pop();
          output[idx] = i - idx;
      }
      stack.push([temperatures[i], i]);
  }
  return output;
};