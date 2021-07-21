const { run } = require("jest");

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
    let operation = process.argv[2];
    let numbers = process.argv.slice(3);
    let sum = 0;
    const add = (a,b) => a+b;
    const subtr = (a,b) => a-b;
    let inputNum = numbers.map(Number);
   
//check for operation
    if (!operation){
        return "No operation provided...";
//check for number
    }else if (!numbers){
        return "No numbers provided...";
// check if the operation is plus or minus
    }else if (operation === "plus") {
        sum += inputNum.reduce(add);
        return sum;
    }else if(operation === "minus"){
        sum -= inputNum.reduce(subtr);
        return sum;
    }else{ return `Invalid operation: ${operation}`
    }



}

// Don't change anything below this line.
module.exports = calculator;

console.log(calculator())
// var sum = 0;
// for (i = 2; i < process.argv.length; i++) {
//     sum += Number(process.argv[i]);
// }

// console.log(sum);
// Usage Exaple:

// node index.js 2 5 6 7

