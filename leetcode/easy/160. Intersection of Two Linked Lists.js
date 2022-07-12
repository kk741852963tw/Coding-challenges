/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let array1 = [];
  let array2 = [];
  while (headA !== null) {
    array1.push(headA);
    headA = headA.next;
  }
  while (headB !== null) {
    array2.push(headB);
    headB = headB.next;
  }
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j] === array1[i]) {
        return array1[i];
      }
    }
  }
  return null;
};