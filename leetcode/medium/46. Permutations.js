/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const help = function(array, input) {
        if (array.length === nums.length) {
            result.push(array);
            return;
        }
        for (let i = 0; i < input.length; i++) {
            const temp = input.slice();
            temp.splice(i, 1);
            help(array.concat(input[i]), temp);
        }
    }
    help([], nums);
    return result;
};