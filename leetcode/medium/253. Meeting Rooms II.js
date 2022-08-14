/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const start = [];
  for (const curr of intervals) {
      start.push(curr[0]);
  }
  start.sort((a, b) => { return a - b });
  const end = [];
  for (const curr of intervals) {
      end.push(curr[1]);
  }
  end.sort((a, b) => { return a - b });
  let res = 0;
  let count = 0;
  let s = 0;
  let e = 0;
  while (s < intervals.length) {
      if (start[s] < end[e]) {
          s++;
          count++;
      } else {
          e++;
          count--;
      }
      res = Math.max(res, count);
  }
  return res;
};