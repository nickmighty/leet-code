
const romanToInt = (s) => {
    let number = 0;
    const letterArray = s.split('')
    const obj = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000
    }
    for (let i = 0; i < letterArray.length; i++) {
        if (obj[letterArray[i]] < obj[letterArray[i+1]]) {
            continue;
        } else if (obj[letterArray[i]] > obj[letterArray[i-1]]) {
            number += obj[letterArray[i]] - obj[letterArray[i-1]];
        } else {
            number += obj[letterArray[i]]
        }              
    }
    return number;
};

console.log(romanToInt('III'));
// 3
console.log(romanToInt('IV'));
// 4
console.log(romanToInt('IX'));
// 9
console.log(romanToInt('LVIII'));
// 58
console.log(romanToInt("MCMXCIV"));
// 1994