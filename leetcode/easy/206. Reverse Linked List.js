/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // if (!head) {
  //     return head;
  // }
  // var array = [];
  // while (head) {
  //     array.push(head.val);
  //     head = head.next;
  // }
  // for (let i = array.length - 1; i >= 0; i--) {
  //     if (i === array.length - 1) {
  //         var result = new ListNode(array[i]);
  //         var temp = result;
  //     } else {
  //         var node = new ListNode(array[i]);
  //         result.next = node;
  //         result = result.next;
  //     }
  // }
  // return temp;
  let prev = null;
  while (head) {
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
  }
  return prev;
};