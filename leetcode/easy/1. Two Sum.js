/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // var a = [];
  // for(var i = 0 ; i < nums.length ; i++){
  //     for(var j = i + 1 ; j < nums.length ; j++){
  //         if(nums[i] + nums[j] === target){
  //             a.push(i);
  //             a.push(j);
  //             return a;
  //         }
  //     }
  // }
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let goal = target - nums[i];
    if (goal in obj && i !== obj[goal]) {
      return [i, obj[goal]];
    }
  }
};