//First Solution - The best

const pivotIndex = function(nums) {
    let leftSum = 0
    let sum = nums.reduce((a, b) => a + b);
    for (let i=0; i<nums.length;i++) {
        if (leftSum === (sum - nums[i] - leftSum) ) {
            return i;
        }
        leftSum = leftSum + nums[i];
    }
    return -1;
}

//Second Solution - Not Really good in terms of time & space
// const pivotIndex = function(nums) {
//     let leftSum;
//     let rightSum;
//     for (let i=0;i<nums.length; i++){
//         leftSum = 0;
//         rightSum = 0;
//         if (i === 0) {
//             for (var k=i+1; k<nums.length; k++) {
//                 rightSum = rightSum + nums[k] ;
//             }
//             if (leftSum === rightSum) {
//                 return i
//             }
//         }else if (i === (nums.length-1)){
//             for (var j=0; j<i; j++) {
//                 leftSum = leftSum + nums[j] ;
//             }
//             if (leftSum === rightSum) {
//                 return i
//             }
//         }else {
//             for (var j=0; j<i; j++) {
//                 leftSum = leftSum + nums[j] ;
//             }
//             for (var k=i+1; k<nums.length; k++) {
//                 rightSum = rightSum + nums[k] ;
//             }
//             if (leftSum === rightSum) {
//                 return i
//             }
//         }
//     }
//     return -1;
// };

let testCase = [1,7,3,6,5,6]
console.log(pivotIndex(testCase))