// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

var runningSum = function(nums) {
    let input = nums
    for (let i=1; i < input.length; i++) {
        input[i] = input[i] + input[i-1]
        }
    return input;
    }

const nums1 = [1,2,3,4]; //expected [1,3,6,10]
const nums2 = [1,1,1,1,1]; //expected [1,2,3,4,5]

console.log(runningSum(nums1));
console.log(runningSum(nums2));