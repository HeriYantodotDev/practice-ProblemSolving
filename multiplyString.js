function multiply(num1, num2) {
    if (num1.length === 1 && num2.length ===1 ) {
        return getMultiplyOneDigit(num1,num2);
    } else {
        return getMultiplyMoreThanOneDigit(num1,num2);
    }
}

function getMultiplyMoreThanOneDigit(num1,num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let outerLoop, innerLoop, firstString, secondString;
    
    if (num1.length < num2.length) {
        firstString = num2;
        secondString = num1;
    } else {
        firstString = num1;
        secondString = num2;
    }

    innerLoop = firstString.length;
    outerLoop = secondString.length;
    
    let counter = 0;
    let result = "0";

    for (let i=(outerLoop-1); i>=0; i--) {
        let saveNumber = "0";
        let tempCalc;
        let resultOneIteration = "";

        for (let j=(innerLoop-1); j>=0; j--) {
            
            tempCalc = addition(getMultiplyOneDigit(firstString[j],secondString[i]),saveNumber);

            if (j === 0) {
                    resultOneIteration = `${tempCalc}${resultOneIteration}`;
            } else {
                if (tempCalc.length > 1) {
                    saveNumber = tempCalc[0];
                    resultOneIteration = `${tempCalc[1]}${resultOneIteration}`;
                } else {
                    saveNumber = 0;
                    resultOneIteration = `${tempCalc[0]}${resultOneIteration}`;
                }
            }
        }

        for (let i=0; i< counter; i++) {
            resultOneIteration = `${resultOneIteration}0`;
        }

        counter+=1;
        result = addition(result, resultOneIteration);
    }

    return result;
}

function getMultiplyOneDigit(num1,num2) {
    return (num1 === "0" || num2 === "0")? "0" : multiplicationTable[num1][num2];
}

function addition(num1,num2) {

    return (num1.length > 1 || num2.length >1) ? 
        getAdditionMultipleDigit(num1,num2): 
        getAdditionOneDigit(num1,num2);
    
}

function getAdditionMultipleDigit(num1,num2) {
    let firstString, secondString, numOfIteration, resultPerIteration; 
    let saveNumber = "0";
    let result = "";

    if (num1.length === num2.length) {
        firstString = num1;
        secondString = num2;
    } else {
        if (num1.length < num2.length) {
            firstString = num2;
            secondString = num1;
        } else {
            firstString = num1;
            secondString = num2;
        }

        while (secondString.length != firstString.length) {
            secondString = `0${secondString}`;
        }

    }


    numOfIteration = firstString.length;

    for (let i=(numOfIteration-1); i >=0 ; i--) {
        
        resultPerIteration =  getAdditionOneDigit(firstString[i], secondString[i]);    
        if (resultPerIteration.length > 1) { 
            resultPerIteration = getAdditionMultipleDigit(resultPerIteration,saveNumber);
        } else {
            resultPerIteration = getAdditionOneDigit(resultPerIteration,saveNumber);
        }

        if (i != 0) {
            if (resultPerIteration.length > 1) {
                saveNumber = resultPerIteration[0];
                resultPerIteration = resultPerIteration[1];
            } else {
                saveNumber = '0';
            }
        }

        result = `${resultPerIteration}${result}`;
    }
    
    return result;
}

function getAdditionOneDigit(num1,num2) {
    return additionTable[num1][num2];
}

const multiplicationTable = {
    "1" : {
        "1" : "1",
        "2" : "2",
        "3" : "3",
        "4" : "4",
        "5" : "5",
        "6" : "6",
        "7" : "7",
        "8" : "8",
        "9" : "9",
        "10" : "10"
    },
    "2" : {
        "1" : "2",
        "2" : "4",
        "3" : "6",
        "4" : "8",
        "5" : "10",
        "6" : "12",
        "7" : "14",
        "8" : "16",
        "9" : "18",
        "10" : "20"
    },
    "3" : {
        '1':'3',
        '2':'6',
        '3':'9',
        '4':'12',
        '5':'15',
        '6':'18',
        '7':'21',
        '8':'24',
        '9':'27',
        '10':'30',        
    },
    "4" : {
        '1':'4',
        '2':'8',
        '3':'12',
        '4':'16',
        '5':'20',
        '6':'24',
        '7':'28',
        '8':'32',
        '9':'36',
        '10':'40',
    },
    "5" : {
        '1':'5',
        '2':'10',
        '3':'15',
        '4':'20',
        '5':'25',
        '6':'30',
        '7':'35',
        '8':'40',
        '9':'45',
        '10':'50',
    },
    "6" : {
        '1':'6',
        '2':'12',
        '3':'18',
        '4':'24',
        '5':'30',
        '6':'36',
        '7':'42',
        '8':'48',
        '9':'54',
        '10':'60',
        
    }, 
    "7" : {
        '1':'7',
        '2':'14',
        '3':'21',
        '4':'28',
        '5':'35',
        '6':'42',
        '7':'49',
        '8':'56',
        '9':'63',
        '10':'70',
        
    }, 
    "8" : {
        '1':'8',
        '2':'16',
        '3':'24',
        '4':'32',
        '5':'40',
        '6':'48',
        '7':'56',
        '8':'64',
        '9':'72',
        '10':'80',
        
    }, 
    "9" : {
        '1':'9',
        '2':'18',
        '3':'27',
        '4':'36',
        '5':'45',
        '6':'54',
        '7':'63',
        '8':'72',
        '9':'81',
        '10':'90',
        
    }, 
    "10" : {
        '1':'10',
        '2':'20',
        '3':'30',
        '4':'40',
        '5':'50',
        '6':'60',
        '7':'70',
        '8':'80',
        '9':'90',
        '10':'100',
    }, 
};

const additionTable = {
    "0" : {
        '0':'0',
        '1':'1',
        '2':'2',
        '3':'3',
        '4':'4',
        '5':'5',
        '6':'6',
        '7':'7',
        '8':'8',
        '9':'9',
    },
    "1" : {
        '0':'1',
        '1':'2',
        '2':'3',
        '3':'4',
        '4':'5',
        '5':'6',
        '6':'7',
        '7':'8',
        '8':'9',
        '9':'10',
        
    }, 
    "2" : {
        '0':'2',
        '1':'3',
        '2':'4',
        '3':'5',
        '4':'6',
        '5':'7',
        '6':'8',
        '7':'9',
        '8':'10',
        '9':'11',
        
    },
    "3" : {
        '0':'3',
        '1':'4',
        '2':'5',
        '3':'6',
        '4':'7',
        '5':'8',
        '6':'9',
        '7':'10',
        '8':'11',
        '9':'12',
        
    },
    "4" : {
        '0':'4',
        '1':'5',
        '2':'6',
        '3':'7',
        '4':'8',
        '5':'9',
        '6':'10',
        '7':'11',
        '8':'12',
        '9':'13',
        
    },
    "5" : {
        '0':'5',
        '1':'6',
        '2':'7',
        '3':'8',
        '4':'9',
        '5':'10',
        '6':'11',
        '7':'12',
        '8':'13',
        '9':'14',
        
    },
    "6" : {
        '0':'6',
        '1':'7',
        '2':'8',
        '3':'9',
        '4':'10',
        '5':'11',
        '6':'12',
        '7':'13',
        '8':'14',
        '9':'15',
        
    },
    "7" : {
        '0':'7',
        '1':'8',
        '2':'9',
        '3':'10',
        '4':'11',
        '5':'12',
        '6':'13',
        '7':'14',
        '8':'15',
        '9':'16',
        
    },
    "8" : {
        '0':'8',
        '1':'9',
        '2':'10',
        '3':'11',
        '4':'12',
        '5':'13',
        '6':'14',
        '7':'15',
        '8':'16',
        '9':'17',
        
    },
    "9" : {
        '0':'9',
        '1':'10',
        '2':'11',
        '3':'12',
        '4':'13',
        '5':'14',
        '6':'15',
        '7':'16',
        '8':'17',
        '9':'18',
        
    },
}

export {multiply};