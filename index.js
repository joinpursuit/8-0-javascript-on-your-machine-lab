/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */


function calculator() {
const operator = process.argv[2]
const numArray = process.argv.slice(3)
const num = numArray.map((element) => Number(element))

if (!operator) {
    return "No operation provided...";
};

if (operator !== 'plus' && operator !== 'minus') {
    return input = `Invalid operation: ${operator}`;
} else {
    for (let i of num) {
        if (!i) { 
            return "No numbers provided...";
        } else if (operator === 'plus') {
            const add = (accumulator, i) => accumulator + i;
            return num.reduce(add);
        } else if (operator === 'minus') {
            const subtract = (accumulator, i) => accumulator - i;
            return num.reduce(subtract);
            } return "No numbers provided..."
        }
        return "No numbers provided..." 
    }
}


// Don't change anything below this line.
module.exports = calculator;
