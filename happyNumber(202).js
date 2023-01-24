//function takes an argument 
//check how many digit (.toString()) - Loop (till it's one digit) - while loop: 
//  =>do the square of each digit and sum them
//if 1 then return true, if the digit isn't 1 returns false. 

function isHappy(n) {

    let checkN = n; 
    let arrayN = [];

    while (checkN != 1) {

        let tempN = 0;
        for (let i = 0; i < checkN.toString().length; i++) {
            tempN += Math.pow(Number(checkN.toString()[i]),2); 
        }
        checkN = tempN;
        if (arrayN.includes(checkN)) {
            break;
        } else {
            arrayN.push(tempN);
        }

    }

    return checkN === 1? true : false;
    }
 