const { totalmem } = require("os");

/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let inputArr = process.argv;
    let operation = inputArr[2];
    let numbers = inputArr.slice(3);
    let sum = 0;

// check if there's an operation or not
    if (!operation) {
        return "No operation provided...";
// check if there are numbers present or not
// 0 = falsy
    } else if (!numbers.length) {
        return "No numbers provided...";
// check if operation is add, minus, or something else
    } else if (operation == "plus") {
        // maybe a for loop & using parseInt
        for (let i = 0; i < numbers.length; i++) {
            sum += parseInt(numbers[i]);
        }
        return sum;
        // return sum += number + number;
    } else if (operation == "minus") {
        // start sum not at zero because then it will be negative
        sum = parseInt(numbers[0]);
        // maybe a for loop & using parseInt
        for (let i = 1; i < numbers.length; i++) {
        sum -= parseInt(numbers[i]);
        }
        return sum;
    } else {
        return `Invalid operation: ${operation}`;
    }
}


// Don't change anything below this line.
module.exports = calculator;
