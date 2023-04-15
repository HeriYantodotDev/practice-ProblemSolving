function findBall (grid) {
    let answer = [];
    const numberofColumn = grid[0].length;
    const numberofRow = grid.length;

    for (i=0; i < numberofColumn ; i++) {
        let column = i;
        let row = 0;

        while (row < numberofRow) {

            if (grid[row][column] === 1) {
                if (grid[row][column+1] === 1) {
                    column+=1;
                } else {
                    answer.push(-1);
                    break;
                }
            } else {
                if (grid[row][column-1] === -1) {
                    column-=1;
                } else {
                    answer.push(-1);
                    break;
                }
            }

            if (row === numberofRow-1) {
                answer.push(column);
            }

            row +=1
        }
    };

    return answer;
}


console.log(findBall([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]])); //Output: [1,-1,-1,-1,-1]
console.log(findBall([[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]])); //Output: [0,1,2,3,4,-1]
console.log(findBall([[-1]])) //Output: [-1]


//Notes about the pattern 
// Iteration for every column								
// Check if it's a V 								
// If the ball drops in a (1)colomn then check to the right - if the right is -1 then it's a V								
// if the ball drops in a (-1) column then check to the left , if the left is +1 then it's a V								
// ==>If it's the limit no coloumn (right or left) then it's a V								
// "If it's not a V then :
// * if it's 1 - 1 check the row below but the coloumn in + 1 then the previous index 
// * if it's -1 -1 check the rown below but the coloumn is -1 then the previous index

// If it's the limit no coloumn (right or left) then it's a V"								
// Do everything till reach out the array length and it's pair of +1 + 1 or -1 -1 								
// The result is the index in the left (-1) or the right (+1) of the previous								