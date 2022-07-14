/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // while(s.indexOf('()') !== -1 || s.indexOf('[]') !== -1 || s.indexOf('{}') !== -1){
  //     if(s.indexOf('()') !== -1){
  //         s = s.substring(0,s.indexOf('()')) + s.substring(s.indexOf('()')+2,s.length);
  //     }else if(s.indexOf('[]') !== -1) {
  //         s = s.substring(0,s.indexOf('[]')) + s.substring(s.indexOf('[]')+2,s.length);
  //     }else{
  //         s = s.substring(0,s.indexOf('{}')) + s.substring(s.indexOf('{}')+2,s.length);
  //     }
  // }
  // if(s === ''){
  //     return true;
  // }else{
  //     return false;
  // }
  const obj = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  const array = [];
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
        if (array[array.length - 1] === obj[s[i]]) {
            array.pop();
        } else {
            return false;
        }
    } else {
        array.push(s[i]);
    }
  }
  if (array.length !== 0) {
    return false;
  }
  return true;
};