/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var a = '';
  if (strs.length === 1){
    if(strs[0].length === 0){
      return a;
    }else{
      return strs[0];
    }
  }else if(strs.indexOf("") !== -1){
    return a;
  }else{
    var b = 0;
    var c = strs.length - 1;
    while(c === strs.length - 1){
      c = 0;
      for(var i = 0 ; i < strs.length - 1 ; i++){
        if(strs[i][b] !== strs[i+1][b] || b >= strs[i].length || b >= strs[i+1].length){
          break;
        }else{
          c += 1;
        }
      }
      if(c === strs.length - 1){
        a += strs[i][b];
        b += 1;
      }
    }
    return a;
  }
};