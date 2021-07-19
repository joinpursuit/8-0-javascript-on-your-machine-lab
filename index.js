/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

// use if statements to check for the operation and numbers
// if operation is strictly equal to "plus" or "minus" return 
// if the operation is plus add the numbers from left to right
// add all the numbers in the numbers array if the operation === plus
// subtract all the numbers in the numbers array if the operation === minus
// if operation is not valid return suggested message

function calculator() {
    // The inputArr is the process.argv 
   let inputArr = process.argv;
   let operation = inputArr[2];
   let numbers = inputArr.slice(3);
   let adjustedNum = numbers.map(Number);
   const add = (a, b) => a + b;
   const subt = (a, b) => a - b;
   let sum = 0;
   // use if statements to check for the operation and numbers
    if(!operation){
        return "No operation provided..."; 
    } else if(!numbers.length){
        return "No numbers provided...";
    } else if(operation === "minus"){
        sum += adjustedNum.reduce(subt)
        return sum;
    } else if(operation === "plus"){
        sum += adjustedNum.reduce(add)
        return sum;
    } else {
        return "Invalid operation: modulo"; 
    }
}
// Don't change anything below this line.
module.exports = calculator;
