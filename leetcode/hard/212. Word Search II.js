/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  // var result = [];
  // var help = function(i, j, n, word) {
  //     if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || visit.has([i, j].toString())) {
  //         return;
  //     }
  //     if (board[i][j] === word[n]) {
  //         if (n === word.length - 1) {
  //             if (!result.includes(word)) {
  //                 result.push(word);
  //                 return;
  //             }
  //             return;
  //         }
  //         visit.add([i, j].toString());
  //         help(i - 1, j, n + 1, word);
  //         help(i + 1, j, n + 1, word);
  //         help(i, j - 1, n + 1, word);
  //         help(i, j + 1, n + 1, word);
  //         visit.delete([i, j].toString());
  //     }
  // };
  // for (let i = 0; i < words.length; i++) {
  //     for (let j = 0; j < board.length; j++) {
  //         for (let k = 0; k < board[j].length; k++) {
  //             if (board[j][k] === words[i][0]) {
  //                 var visit = new Set();
  //                 help(j, k, 0, words[i]);
  //             }
  //         }
  //     }
  // }
  // return result;
  var Tries = function() {
      this.children = {};
      this.end = false;
      this.refs = 0;
  };
  Tries.prototype.addWord = function(word) {
      let curr = this;
      curr.refs++;
      for (let i = 0; i < word.length; i++) {
          if (!curr.children[word[i]]) {
              curr.children[word[i]] = new Tries();
          }
          curr = curr.children[word[i]];
          curr.refs++;
      }
      curr.end = true;
  };
  Tries.prototype.removeWord = function(word) {
      let curr = this;
      curr.refs--;
      for (let i = 0; i < word.length; i++) {
          if (curr.children[word[i]]) {
              curr = curr.children[word[i]];
              curr.refs--;
          }
      }
  };
  let root = new Tries();
  for (let i = 0; i < words.length; i++) {
      root.addWord(words[i]);
  }
  var result = new Set();
  var visit = new Set();
  var help = function(i, j, node, word) {
      if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || visit.has([i, j].toString()) || !node.children[board[i][j]] || node.children[board[i][j]].refs < 1) {
          return;
      }
      visit.add([i, j].toString());
      node = node.children[board[i][j]];
      word += board[i][j];
      if (node.end) {
          node.end = false;
          result.add(word);
          root.removeWord(word);
      }
      help(i - 1, j, node, word);
      help(i + 1, j, node, word);
      help(i, j - 1, node, word);
      help(i, j + 1, node, word);
      visit.delete([i, j].toString());
  }
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          help(i, j, root, "");
      }
  }
  return [...result];
};