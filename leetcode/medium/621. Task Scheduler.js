/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const charMap = new Map();
  let maxCharCount = 0;
  let maxChar = tasks[0];
  for (let char of tasks) {
      charMap.set(char, (charMap.get(char) || 0) + 1);
      if (charMap.get(char) > maxCharCount) {
          maxCharCount = charMap.get(char);
          maxChar = char;
      }
  }
  let idleCount = (maxCharCount - 1) * n;
  charMap.forEach((count, char) => {
      if (char === maxChar) return;
      if (count === maxCharCount) idleCount -= (count - 1);
      else idleCount -= count;
  });
  return idleCount <= 0 ? tasks.length : tasks.length + idleCount;
};