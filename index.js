/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */// creating
 function calculator() {
    // Create variables for clarity 
    let operation = process.argv[2];
    let numbers = process.argv.slice(3);
    // Let subTotal start as the first number. 
    let subTotal = Number(numbers[0]);
    // Edge cases: if & else statement 
    // If operation is missing, return error.
    if (operation === undefined) {
        return `No operation provided...`;
    }
    // If numbers are not provided and array is empty, return error.
    else if (numbers[0] === undefined) {
        return `No numbers provided...`;
    }
    // If operation is not plus or minus, return error message.
    else if (operation !== 'plus' && operation !== 'minus') {
        return `Invalid operation: ${operation}`;
    } 
    // Number calculations: 2 loops through numbers.
    // If operation is minus, then subtract the numbers. 
    if (operation === 'minus') {
        for (i = 1; i < numbers.length; i++) {
            subTotal -= Number(numbers[i]);
        }
    
    }
    // If operation is plus, then add the numbers.
    if (operation === 'plus') {
        for (i = 1; i < numbers.length; i++) {
            subTotal += Number(numbers[i]);
        }
        
    }
    // Return calculated number 
    // After calculations, declare total and return it. 
    let total = subTotal 
    return total;
}



// Don't change anything below this line.
module.exports = calculator;
