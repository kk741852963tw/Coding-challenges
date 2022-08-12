/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[s.length] = true;
  for (let i = s.length - 1; i >= 0; i--) {
      for (let j = 0; j < wordDict.length; j++) {
          if (i + wordDict[j].length <= s.length && s.substring(i, i + wordDict[j].length) === wordDict[j]) {
              dp[i] = dp[i + wordDict[j].length];
          }
          if (dp[i]) {
              break;
          }
      }
  }
  return dp[0];
};