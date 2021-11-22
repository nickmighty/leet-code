function twoSum(nums: number[], target: number): number[] {
    const fixedArray: number[] = [...nums].filter(e => target > e)
    const numArray: number[] = [];
    let currentIndex: number = 0;
    while (!numArray.length) {
        for (let i = currentIndex+1; i < fixedArray.length; i++) {
            if (fixedArray[currentIndex] + fixedArray[i] === target) {
                numArray.push(currentIndex, i)
            }
            if (fixedArray[currentIndex] + fixedArray[i] > target) {
                break;
            }
        }     
        currentIndex++
    }
    return numArray;
};

console.log(twoSum([2,7,11,15], 9))
// [0,1]
console.log(twoSum([3,2,4], 6))
// [1,2]
