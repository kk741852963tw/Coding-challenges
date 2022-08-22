/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let dummy = new ListNode(0, head);
  let groupPrev = dummy;
  while (true) {
      let n = k;
      let cur = groupPrev;
      while (cur && n > 0) {
          cur = cur.next;
          n--;
      }
      let kth = cur;
      if (!kth) {
          break;
      }
      let groupNext = kth.next;
      let prev = kth.next;
      let curr = groupPrev.next;
      while (curr !== groupNext) {
          let temp = curr.next;
          curr.next = prev;
          prev = curr;
          curr = temp;
      }
      let temp = groupPrev.next;
      groupPrev.next = kth;
      groupPrev = temp;
  }
  return dummy.next;
};