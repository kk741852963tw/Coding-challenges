/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  // var obj = {};
  // while (head) {
  //     if (obj[head.val]) {
  //         for (let i = 0; i < obj[head.val].length; i++) {
  //             if (obj[head.val][i] === head) {
  //                 return true;
  //             }
  //         }
  //         obj[head.val].push(head);
  //     } else {
  //         obj[head.val] = [head];
  //     }
  //     head = head.next;
  // }
  // return false;
  let set = new Set();
  while (head) {
      if (set.has(head)) {
          return true;
      } else {
          set.add(head);
          head = head.next;
      }
  }
  return false;
};