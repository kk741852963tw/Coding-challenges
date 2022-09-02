/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // let result = false;
    // const help = function(i, j, string) {
    //     if (string === word) {
    //         result = true;
    //         return;
    //     }
    //     if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || !board[i][j] || string.length >= word.length) {
    //         return;
    //     }
    //     var temp = board[i][j];
    //     board[i][j] = 0;
    //     help(i - 1, j, string + temp);
    //     help(i + 1, j, string + temp);
    //     help(i, j - 1, string + temp);
    //     help(i, j + 1, string + temp);
    //     board[i][j] = temp;
    // };
    // for (let i = 0; i < board.length; i++) {
    //     for (let j = 0; j < board[i].length; j++) {
    //         if (!result) {
    //             help(i, j, '');
    //         } else {
    //             return result;
    //         }
    //     }
    // }
    // return result;
    var Tries = function() {
        this.children = {};
        this.end = false;
    };
    Tries.prototype.addWord = function(word) {
        let curr = this;
        for (let i = 0; i < word.length; i++) {
          if (!curr.children[word[i]]) {
              curr.children[word[i]] = new Tries();
          }
          curr = curr.children[word[i]];
        }
        curr.end = true;
    };
    let root = new Tries();
    var result = false;
    root.addWord(word);
    var help = function(i, j, node) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || !board[i][j] || !node.children[board[i][j]]) {
            return;
        }
        var temp = board[i][j];
        node = node.children[board[i][j]];
        board[i][j] = 0;
        if (node.end) {
            result = true;
        }
        help(i - 1, j, node);
        help(i + 1, j, node);
        help(i, j - 1, node);
        help(i, j + 1, node);
        board[i][j] = temp;
    };
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            help(i, j, root);
        }
    }
    return result;
};