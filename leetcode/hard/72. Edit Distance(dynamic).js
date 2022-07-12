/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  var metric = Array(word1.length + 1);
  for (let i = 0; i < metric.length; i++) {
    metric[i] = Array(word2.length + 1);
  }
  for (let i = 0; i < metric[0].length; i++) {
    metric[0][i] = i;
  }
  for (let i = 0; i < metric.length; i++) {
    metric[i][0] = i;
  }
  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        metric[i + 1][j + 1] =  metric[i][j];
      } else {
        metric[i + 1][j + 1] = Math.min(metric[i][j + 1], metric[i + 1][j], metric[i][j]) + 1;
      }
    }
  }
  return metric[word1.length][word2.length];
};