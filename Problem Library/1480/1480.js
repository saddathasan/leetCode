const runningSum = (nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        nums[i] = sum;
        console.log(nums[i]);
    }
    return runningSum;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(runningSum(arr));