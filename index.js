/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    // create new variable input to store value of process.argv array.
    let input = process.argv;
    // assign index 2 of input array to variable operator
    let operation = input[2];
    // use slice method to assign index 3 of input array to variable numbers.
    let numbers = input.slice(3);
    // create output variable to store first index of numbers array
    // use Number() function to to convert inputted string to number type.
    let result = Number(numbers[0]);
    // if no operation is provided, return an error message. 
    if (!operation) {
        return "No operation provided...";
    }
    // if no numbers are provided, return an error message. 
    else if (numbers.length === 0) {
        return "No numbers provided...";
    }
    // if the operation does not match 'plus' or 'minus,' return an error message.
    else if (operation !== 'plus' && operation !== 'minus') {
        return `Invalid operation: ${operation}`;
    }
    // if the operation is plus, perform addition operation on numbers and return result.
    if (operation === 'plus') {
        for (let i = 1; i < numbers.length; i++) {
            result += Number(numbers[i]);
        }
        return result;
    }
    // if the operation is minus, perform subtraction operation on numbers and return result.
    if (operation === 'minus') {
        for (let i = 1; i < numbers.length; i++) {
            result -= Number(numbers[i]);
        }
        return result;
    }
}

// Don't change anything below this line.
module.exports = calculator;
