/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  var mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2;
    }
      if (!list2) {
        return list1;
    }
    let nodetemp = new ListNode(0, null);
    let prev = nodetemp;
    while (list1 && list2) {
        if (list1.val > list2.val) {
            prev.next = list2;
            list2 = list2.next;
        } else {
            prev.next = list1;
            list1 = list1.next;
        }
        prev = prev.next;
    }
    prev.next = list1 || list2;
    return nodetemp.next;
  };
  if (lists.length === 0) {
      return null;
  }
  if (lists.length === 1) {
      return lists[0];
  }
  while (lists.length > 1) {
      let array = [];
      for (let i = 0; i < lists.length; i = i + 2) {
          let l1 = lists[i];
          let l2;
          if (i + 1 > lists.length - 1) {
              l2 = null;
          } else {
              l2 = lists[i + 1];
          }
          array.push(mergeTwoLists(l1, l2));
      }
      lists = array;
  }
  return lists[0];
};