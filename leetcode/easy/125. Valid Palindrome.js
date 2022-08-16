/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//     // var temp = s.toLowerCase();
//     // var reverse = '';
//     // var noreverse = ''
//     // for (let i = temp.length - 1; i >= 0; i--) {
//     //     if ((47 < temp[i].charCodeAt(0) && temp[i].charCodeAt(0) < 58) || (96 < temp[i].charCodeAt(0) && temp[i].charCodeAt(0) < 123)) {
//     //         reverse += temp[i];
//     //     }
//     // }
//     // for (let i = 0; i < temp.length; i++) {
//     //     if ((47 < temp[i].charCodeAt(0) && temp[i].charCodeAt(0) < 58) || (96 < temp[i].charCodeAt(0) && temp[i].charCodeAt(0) < 123)) {
//     //         noreverse += temp[i];
//     //     }
//     // }
//     // if (reverse === noreverse) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     s = s.toLowerCase();
//     let left = 0;
//     let right = s.length - 1;
//     while (left <= right) {
//         if (left === right) {
//             return true;
//         }
//         if (left === right - 1) {
//             if ((!(47 < s.charCodeAt(left) && s.charCodeAt(left) < 58) && !(96 < s.charCodeAt(left) && s.charCodeAt(left) < 123)) || (!(47 < s.charCodeAt(right) && s.charCodeAt(right) < 58) && !(96 < s.charCodeAt(right) && s.charCodeAt(right) < 123))) {
//                 return true;
//             }
//             if (s[left] === s[right]) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//         if (!(47 < s.charCodeAt(left) && s.charCodeAt(left) < 58) && !(96 < s.charCodeAt(left) && s.charCodeAt(left) < 123)) {
//             left++;
//             continue;
//         }
//         if (!(47 < s.charCodeAt(right) && s.charCodeAt(right) < 58) && !(96 < s.charCodeAt(right) && s.charCodeAt(right) < 123)) {
//             right--;
//             continue;
//         }
//         if (s[left] === s[right]) {
//             left++;
//             right--;
//         } else {
//             return false;
//         }
//     }
// };
var isPalindrome = function(s) {
    if (!s.length) return true;

    s = s.toLowerCase();

    return isValid(s);
};

const isValid = (s) => {
    let [ left, right ] =  [ 0, (s.length - 1) ];

    while (left < right) {
        while ((left < right) && isNonAlphaNumeric(s[left])) left++;
        while ((left < right) && isNonAlphaNumeric(s[right])) right--;

        const isSame = s[left] === s[right];
        if (!isSame) return false;

        left++; right--;
    }

    return true;
}

const isNonAlphaNumeric = (char) => {
    const isNonAlpha = char < 'a' || 'z' < char;    // a(97) - z(122)
    const isNonNumeric = char < '0' || '9' < char;  // 0(48) - 9(57)

    return isNonAlpha && isNonNumeric;
};