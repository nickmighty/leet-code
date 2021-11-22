// var isPalindrome = function(x) {
//     return x.toString().split('').reverse().join('') === x.toString();
// };

var isPalindrome = function(x) {
    const tempArray = [];
    const tempNumber = x.toString()
    for (let i = 0; i < tempNumber.length; i++) {
        tempArray.unshift(tempNumber[i])
    }
    return +tempArray.join('') === x;
};

console.log(isPalindrome(121))
// true
console.log(isPalindrome(-121))
// false
console.log(isPalindrome(10))
// false