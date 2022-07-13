/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var z = x.toString();
  var y = '';
  for(var i = z.length - 1 ; i >= 0 ; i--){
    y += z[i];
  }
  if(z === y){
    return true;
  }else{
    return false;
  }
};