function longestCommonPrefix(strs) {
    const shortestLength = getTheShortestLengthString(strs);
    const arrayLength = strs.length;
    let commonPrefix = "";

    for (let i=0; i< shortestLength; i++) {
        const checkItem = strs[0][i];
        counter = 0;

        for (let j=0; j<arrayLength; j++) {
            if (strs[j][i] === checkItem) {
                counter+=1;
            } else {
                break;
            }
        }

        if (counter === arrayLength) {
            commonPrefix += checkItem;
        } else {
            break;
        }
    }
    return commonPrefix
}

function getTheShortestLengthString(strs) {
    let minLength = strs[0].length;
    for (let i of strs) {
        if ( i.length < minLength ) {
            minLength = i.length;
        }
    }
    console.log(minLength);
    return minLength;
}