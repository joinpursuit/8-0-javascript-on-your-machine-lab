/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let operator = process.argv[2]
    let total = 0
    if (typeof(operator) !== 'string') {
        return 'No operation provided...'
    }
    if (process.argv.length < 4) {
        return 'No numbers provided...'
    }
    if (operator != "plus" && operator != 'minus') {
        return `Invalid operation: ${operator}`
    } 
    if (operator === 'plus') {   
        for (let i = 3; i < process.argv.length; i++){ 
            total += Number(process.argv[i]);
        }
    } else if (operator === 'minus') {   
        total = process.argv[3];
        for (let i = 4; i < process.argv.length; i++) {         
            total -= Number(process.argv[i]);
        }
    }
    return total;
}
// Don't change anything below this line.
module.exports = calculator;
