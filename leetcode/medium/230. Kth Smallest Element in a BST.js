/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let n = 0;
  let array = [];
  let curr = root;
  while (curr || array) {
      while (curr) {
          array.push(curr);
          curr = curr.left;
      }
      curr = array.pop();
      n++;
      if (n === k) {
          return curr.val;
      }
      curr = curr.right;
  }
};