// const str = "banana";`

// length = 6;
// 2 -> 5
// 3 -> 4
// 4 -> 3
// 5 -> 2

// const str = "abcd";

// length = 4
// 2 -> 3
// 3 -> 2

function longestDuplicateString(str) {
    let latestLengthOfCombination = 1;
    for (let i = 2; i < str.length; i++) {
        let lengthOfCombination = str.length - latestLengthOfCombination;
        let countOfCombination = i;
        latestLengthOfCombination = i;
    
        let arrayOfCombination = [];
        for (let j = 0; j < countOfCombination; j++) {
            let newStr = str.slice(j, lengthOfCombination + j);
    
            if (arrayOfCombination.find((element) => element === newStr) === undefined) {
                arrayOfCombination.push(newStr);
            } else {
                return newStr;
            }
        }
    }

    return 'not found';
}

console.log(longestDuplicateString('banana'));
console.log(longestDuplicateString('abcdef'));
