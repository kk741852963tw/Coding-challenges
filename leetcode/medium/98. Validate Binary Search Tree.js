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
 * @return {boolean}
 */
var isValidBST = function(root) {
  var test = function(node, left, right) {
      // if (!node.right && !node.left) {
      //     return true;
      // }
      // if (node.right && !node.left) {
      //     if (node.right.val > node.val && node.right.val < right) {
      //         return test(node.right, node.val, right);
      //     } else {
      //         return false;
      //     }
      // }
      // if (node.left && !node.right) {
      //     if (node.left.val < node.val && node.left.val > left) {
      //         return test(node.left, left, node.val);
      //     } else {
      //         return false;
      //     }
      // }
      // if ((node.left.val < node.val && node.left.val > left) && (node.right.val > node.val && node.right.val < right)) {
      //     return test(node.left, left, node.val) && test(node.right, node.val, right);
      // }
      // return false;
      if (!node) {
          return true;
      }
      if (!(node.val < right && node.val > left)) {
          return false;
      }
      return test(node.left, left, node.val) && test(node.right, node.val, right);
  }
  return test(root, -Infinity, Infinity);
};