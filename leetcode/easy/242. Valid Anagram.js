/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // var stemp = s.split('').sort().join('');
  // var ttemp = t.split('').sort().join('');
  // if (stemp === ttemp) {
  //     return true;
  // }
  // return false;
  if (s.length !== t.length) {
      return false;
  }
  const sobj = {};
  const tobj = {};
  for (let i = 0; i < s.length; i++) {
      if (!sobj[s[i]]) {
          sobj[s[i]] = 1;
      } else {
          sobj[s[i]]++;
      }
      if (!tobj[t[i]]) {
          tobj[t[i]] = 1;
      } else {
          tobj[t[i]]++;
      }
  }
  for (let key in sobj) {
      if (sobj[key] !== tobj[key]) {
          return false;
      }
  }
  return true;
};