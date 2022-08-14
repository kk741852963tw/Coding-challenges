/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  let count = 0;
  // intervals.sort((a, b) => { return a[0] - b[0] });
  // intervals.sort((a, b) => { return a[1] - b[1] });
  intervals.sort(([ aStart, aEnd ], [ bStart, bEnd ]) => aEnd !== bEnd
      ? aEnd - bEnd
      : aStart - bStart
  );
  const prev = intervals.shift();
  for (const curr of intervals) {
      const [ prevStart, prevEnd ] = prev;
      const [ currStart, currEnd ] = curr;
      const hasGap = prevEnd <= currStart;
      if (!hasGap) continue;
      prev[1] = curr[1];
      count++;
  }
  return intervals.length - count;
};