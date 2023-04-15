// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, 
// when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]


function findVariable(array, target) {
    for (let i = 0; i< array.length; i++) {
        if ( array[i] !== target && array.includes(target-array[i]) ) {
            return [array[i], (target-array[i])]
        }
    }
}
const array = [0,4,1,3];
console.log(findVariable(array,4));
