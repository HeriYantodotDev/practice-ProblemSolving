// Question 1: Clean the room function: 
// given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered.
//  For example answer(ArrayFromAbove) s
//  hould return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//  Bonus: Make it so it organizes strings differently from number types. 
//  i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

//solution 1
// function cleanTheRoom(array) {
//     array.sort( (a,z) => a - z);
//     const objNumber = {};
//     const objString = {}; 

//     array.forEach((item) => {
//         if (typeof(item) === "number") {
//             objNumber[item] = (objNumber[item]??0) + 1;
//         } else if (typeof(item) === "string") {
//             objString[item] = (objString[item]??0) + 1;
//         }
//     })

//     const newArray = [];

//     for (const obj in objNumber) {
//         let tempArray = [];
//         if (objNumber[obj] > 1) {
//             for (let i=0; i < objNumber[obj]; i++) {
//                 tempArray.push(Number(obj));
//             }
//         } else {
//             newArray.push(Number(obj))
//         }
        
//         tempArray.length > 0 ? newArray.push(tempArray) : ""
//     }

//     for (const obj in objString) {
//         let tempArray = [];
//         if (objString[obj] > 1) {
//             for (let i=0; i < objString[obj]; i++) {
//                 tempArray.push(obj);
//             }
//         } else {
//             newArray.push(obj)
//         }
//         tempArray.length > 0 ? newArray.push(tempArray) : ""
//     }
//     return newArray
// }

//solution2
// function cleanTheRoom(array) {
//     array.sort( (a,z) => a - z);
//     const objArray = {
//         number : {},
//         string : {}
//     }; 

//     array.forEach((item) => {
//         if (typeof(item) === "number") {
//             objArray.number[item] = (objArray.number[item]??0) + 1;
//         } else if (typeof(item) === "string") {
//             objArray.string[item] = (objArray.string[item]??0) + 1;
//         }
//     })

//     const newArray = [];

//     for (const subObj in objArray) {
//         for (const obj in objArray[subObj]) {
//             let tempArray = []
//             if (objArray[subObj][obj] > 1) {
//                 for (let i = 0; i < objArray[subObj][obj];i++) {
//                     subObj === "number"? tempArray.push(Number(obj)) : tempArray.push(obj);
//                 }
//             } else {
//                 subObj === "number"? newArray.push(Number(obj)) :newArray.push(obj);
//             }
//             tempArray.length>0? newArray.push(tempArray):"";
//         }    
//     }

//     return newArray
// }

//solution 3

function cleanTheRoom(array) {
    const setArray = Array.from(new Set(array)).sort((a,z) => a - z);
    let arrayNumber = [];
    let arrayString = [];
    setArray.forEach( (item) => {
        let temp = array.filter((value) => value === item);
        temp.length === 1 ? temp = temp[0]:"";
        typeof(item) === "number"? arrayNumber.push(temp) : arrayString.push(temp);
    })
    return arrayNumber.concat(arrayString)
}

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,"5","10","1","1","50"];
const array2 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

console.log(cleanTheRoom(array));
console.log(cleanTheRoom(array2));
