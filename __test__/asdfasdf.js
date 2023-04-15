// import { expect } from "chai";
// import {multiply} from "../multiplyString";

// describe('Multiply - Multiply String without conversion to integer', () => {
//     it ('returns the multipy of two strings one digit each: 2 x 3 ', ()=> {
//         const expected = "6";
//         const actual = multiply("2","3");
//         expect(actual).to.equal(expected);
//     });

//     it ('returns the multipy of two strings one digit each: 3 x 2 ', ()=> {
//         const expected = "6";
//         const actual = multiply("3","2");
//         expect(actual).to.equal(expected);
//     });

//     it ('returns the multipy of two strings one digit each: 5 x 9 ', ()=> {
//         const expected = "45";
//         const actual = multiply("5","9");
//         expect(actual).to.equal(expected);
//     });

//     it ('returns the multipy of two strings one digit each: 9 x 5 ', ()=> {
//         const expected = "45";
//         const actual = multiply("9","5");
//         expect(actual).to.equal(expected);
//     });

//     it ('returns the multiplication of two strings more then one digit : 123 x 456', ()=> {
//         const expected = "56088";
//         const actual = multiply("123","456");
//         expect(actual).to.equal(expected);
//     });

//     it ('returns 0 if one of the string or both is 0 ', ()=> {
//         const expected = "0";
//         const actual = multiply("0","0");
//         expect(actual).to.equal(expected);
//     });

//     it ('returns 0 if one of the string or both is 0 ', ()=> {
//         const expected = "0";
//         const actual = multiply("1","0");
//         expect(actual).to.equal(expected);
//     });

//     it ('returns 0 if one of the string or both is 0 ', ()=> {
//         const expected = "0";
//         const actual = multiply("0","1");
//         expect(actual).to.equal(expected);
//     });

//     it ('returns 891 => 9 x 99', ()=> {
//         const expected = "891";
//         const actual = multiply("9","99");
//         expect(actual).to.equal(expected);
//     });

//     it ('returns 891 => 9 x 99', ()=> {
//         const expected = "891";
//         const actual = multiply("99","9");
//         expect(actual).to.equal(expected);
//     });

//     it ('returns 121932631112635269 => 123456789 x 987654321', ()=> {
//         const expected = "121932631112635269";
//         const actual = multiply("123456789","987654321");
//         expect(actual).to.equal(expected);
//     });

//     it ('returns 121932631112635269 => 123456789 x 987654321', ()=> {
//         const expected = "121932631112635269";
//         const actual = multiply("987654321", "123456789");
//         expect(actual).to.equal(expected);
//     });

//     it ('retuns 0 => 9133 x 0 ', () => {
//         const expected = "0";
//         const actual = multiply("9133","0");
//         expect(actual).to.equal(expected);
//     }
//     )

// });
