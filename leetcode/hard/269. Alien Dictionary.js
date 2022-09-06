/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    // const obj = {};
    // for (let i = 0; i < words.length; i++) {
    //     for (let j = 0; j < words[i].length; j++) {
    //         if (!obj[words[i][j]]) {
    //             obj[words[i][j]] = [];
    //         }
    //     }
    // }
    // for (let i = 0; i < words.length - 1; i++) {
    //     const word1 = words[i];
    //     const word2 = words[i + 1];
    //     const minLength = Math.min(word1.length, word2.length);
    //     if (word1.length > word2.length && word1.substring(0, minLength) === word2.substring(0, minLength)) {
    //         return "";
    //     }
    //     for (let j = 0; j < minLength; j++) {
    //         if (word1[j] !== word2[j]) {
    //             if (!obj[word1[j]].includes(word2[j])) {
    //                 obj[word1[j]].push(word2[j]);
    //             }
    //             break;
    //         }
    //     }
    // }
    // const visit = {};
    // const result = [];
    // const help = function(char) {
    //     if (visit[char] !== undefined) {
    //         return visit[char];
    //     }
    //     visit[char] = true;
    //     for (let i = 0; i < obj[char].length; i++) {
    //         if (help(obj[char][i])) {
    //             return true;
    //         }
    //     }
    //     visit[char] = false;
    //     result.push(char);
    // };
    // for (let key in obj) {
    //     if (help(key)) {
    //         return "";
    //     }
    // }
    // result.reverse();
    // return result.join('');
    const obj = {};
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (!obj[words[i][j]]) {
                obj[words[i][j]] = [];
            }
        }
    }
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        const minLength = Math.min(word1.length, word2.length);
        if (word1.length > word2.length && word1.substring(0, minLength) === word2.substring(0, minLength)) {
            return "";
        }
        for (let j = 0; j < minLength; j++) {
            if (word1[j] !== word2[j]) {
                if (!obj[word1[j]].includes(word2[j])) {
                    obj[word1[j]].push(word2[j]);
                }
                break;
            }
        }
    }
    const visit = [];
    const path = [];
    const result = [];
    let check = false;
    const help = function(char) {
        if (!path.includes(char)) {
            path.push(char);
        }
        if (visit.includes(char)) {
            check = true;
            return;
        }
        visit.push(char);
        for (let i = 0; i < obj[char].length; i++) {
            if (!check) {
                help(obj[char][i])
            }
        }
        visit.pop();
        if (!result.includes(char)) {
            result.push(char);
        }
    };
    for (let key in obj) {
        if (check) {
            return '';
        } else if (path.includes(key)) {
            continue;
        } else {
            help(key);
        }
    }
    result.reverse();
    return result.join('');
};