// Input: arr = [4,3,1,1,3,3,2], k = 3  Output: 2
/** Psedeou Code 
 * First Turn the array to the Object 
 * Sort the object based on the frequency
 * Make a loop then substract the value till K = 0
 * Count the object that still has more than 0
 */

const findLeastNumOfUniqueInts = function(arr, k) {
    //First Turn the array to the Object 
    const obj = {}
    arr.forEach( (arr) => {
        obj[arr] = (obj[arr] || 0) + 1
    } );
    //Sort the object based on the frequency
    const sortedValues = Object.values(obj).sort((a,b) => a - b);
    //Make a loop start substract the value till K = 0
    let loopIndex = 0    
    while (k > 0) {
        if (k >= sortedValues[loopIndex]) {
            k -= sortedValues[loopIndex];
            sortedValues[loopIndex] = 0;
            loopIndex++;
        } else if (k < sortedValues[loopIndex]) {
            sortedValues[loopIndex]-= k;
            k = 0;
        }
    }
    //Count the object that has value more than 0
    return sortedValues.filter ((item) => item > 0).length

};

const arr = [4,3,1,1,3,3,2];
const k = 3


const arr2 =[2,1,1,3,3,3]
const k2 = 3

console.log(findLeastNumOfUniqueInts(arr,k));
console.log(findLeastNumOfUniqueInts(arr2,k2));