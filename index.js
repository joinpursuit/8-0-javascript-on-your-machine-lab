/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

 // const arrNum = number.map(Number);
 
 function calculator() {
    const operator = process.argv[2];
    const number = process.argv[3];
    let result = Number(number);
    if (operator === undefined) {
        return "No operation provided...";
    } else if (number === undefined) {
        return "No numbers provided...";
    }
    for (let i = 4; i < process.argv.length; i++) {
        if (operator === 'plus') {
            result += Number(process.argv[i]);
        } else if (operator === 'minus') {
            result -= Number(process.argv[i]);
        } else {
            return `Invalid operation: ${operator}`;
        }
    }
    return result;
}
 
calculator()

// Don't change anything below this line.
module.exports = calculator;
