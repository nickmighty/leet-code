

function singleNonDuplicate(nums: number[]): number { 
    let num: number = 0;
    let stopCondition: boolean = true;
    while (stopCondition) {
        if (nums[num] === nums[num+1]) {
            num = num + 2;
            continue;
        }
        stopCondition = false;
    }
    return nums[num];
};
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));