/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

function calculator() {

// declare a constant variable and assign it a copy of process.argv array starting from index 2
const mathArgs = process.argv.slice(2);
// add variable command assign it to index 0, which should represent a string containing "plus" or "minus"
const command = mathArgs[0];
// declare a variable named resultsOfSumOrDifference and assign it the evaluated result of converting mathArgs at index 1 to a number
let resultOfSumOrDifference = Number(mathArgs[1]);
// if command has no operators
// return error message 
if (command === undefined) {
 return 'No operation provided...'
} 
// if no number are provided
// return error message
if (mathArgs[1] === undefined) {
 return 'No numbers provided...'
}
// if command is not plus && command is not minus
    // return error message
if (command !== 'plus' && command !== 'minus' ) {
 return `Invalid operation: ${command}`
}
// if the command at index 0 strictly equals plus  | all other arguments starting from index 1 should be a number
    // iterate through the mathArgs array and make initial value 2
// convert element to a number, then add to resultOfSumOrDifference
 if (command === 'plus') {
     for (i = 2; i < mathArgs.length; i++) {
    resultOfSumOrDifference += Number(mathArgs[i]) 
     }
 }
// if the command at index 0 strictly equals minus
    // iterate through the mathArgs array and make initial value 2
// convert element to a number, then subtract from resultOfSumOrDifference
if (command === 'minus') {
    for (i = 2; i < mathArgs.length; i++) {
   resultOfSumOrDifference -= Number(mathArgs[i]) 
    }
}
// return sum or difference of all numbers
return resultOfSumOrDifference
}

// Don't change anything below this line.
module.exports = calculator;
