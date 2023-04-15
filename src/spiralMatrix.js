
function spiralOrder(matrix) {
    let spiralMatrix = []
    while (matrix.length != 0) {
        
        let firstIteration = matrix[0].length;
        for (i=0; i< firstIteration; i++) {
            spiralMatrix.push(matrix[0].shift());
        }
        matrix.shift();
        if (matrix.length === 0) {break;}

        let secondIteration = matrix.length;
        if (secondIteration > 1) {
            for (i=0; i<secondIteration; i++) {
                spiralMatrix.push(matrix[i].pop());
            }

            let removeEmptyArray = matrix.filter(item => item.length>0); 
            matrix = removeEmptyArray;
        }
        if (matrix.length === 0) {break;}
        

        let thirdIteration = matrix[matrix.length-1].length;
        if (thirdIteration > 1 ) {
            for (i=0; i< thirdIteration; i++) {
                spiralMatrix.push(matrix[matrix.length-1].pop());
            }
            matrix.pop();
        }
        if (matrix.length === 0) {break;}

        let fourthIteration = matrix.length;
        if (fourthIteration > 1) {
            for (i=fourthIteration-1; i>=0; i--) {
                spiralMatrix.push(matrix[i].shift());
            }
            let removeEmptyArray = matrix.filter(item => item.length>0); 
            matrix = removeEmptyArray;
        }
    }
    return spiralMatrix;
}

// //for test
// console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
// console.log(spiralOrder([[1,2],[3,4],[5,6],[7,8]]));
// console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));
// console.log(spiralOrder([[7],[9],[6]]));