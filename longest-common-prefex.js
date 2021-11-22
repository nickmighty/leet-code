

var longestCommonPrefix = function(strs) {
    let prefix = strs.length <= 1 ? strs.join('') : '';
    for (let i = 0; i < strs[0].length; i++) {
        let checker = 0;
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] === strs[j][i] && prefix.length === i) {
                checker++
                if (checker === strs.length-1) {
                    prefix += strs[0][i];
                    checker = 0;
                }
                continue;
            } 
            break;
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
// "fl"

console.log(longestCommonPrefix(["dog","racecar","car"]));
// "" , no common prefix

console.log(longestCommonPrefix(["a"]));
// a

console.log(longestCommonPrefix(["cir", "car"]));
// c