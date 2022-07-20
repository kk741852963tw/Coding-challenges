
var WordDictionary = function() {
  this.list = {};
  this.end = false;
};

/**
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let curr = this;
  for (let i = 0; i < word.length; i++) {
      if (!curr.list[word[i]]) {
          curr.list[word[i]] = new WordDictionary();
      }
      curr = curr.list[word[i]];
  }
  curr.end = true;
};

/**
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  var test = function(obj, n) {
      let curr = obj;
      for (let i = n; i < word.length; i++) {
          if (word[i] === '.') {
              for (let c in curr.list) {
                  if (test(curr.list[c], i + 1)) {
                      return true;
                  }
              }
              return false;
          } else {
              if (!curr.list[word[i]]) {
                  return false;
              }
              curr = curr.list[word[i]];
          }
      }
      return curr.end;
  };
  return test(this, 0);
};

/**
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/