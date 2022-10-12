/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
const argv2 = process.argv
const argv = argv2.slice(2)
const command = argv[0]
const number1 = parseInt(argv[1])
const number2 = parseInt(argv[2])
    if (process.argv[2] === "plus"){
console.log(number1 + number2)
    } else if (command === "minus"){
console.log(number1 - number2)
    } else {
        console.log("hi")
    }
}

// Don't change anything below this line.
module.exports = calculator;
