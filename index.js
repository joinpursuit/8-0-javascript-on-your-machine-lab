/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    // Set result to zero to add or subtract and return later
    let result = 0;
    // If only up to 2 arguments, no operation was provided
    if (process.argv.length <= 2) {
        return "No operation provided...";
    }
    // If 3rd arg is not plus or minus, return invalid operation
    else if (process.argv[2] !== "plus" && process.argv[2] !== "minus"){
        return "Invalid operation: " + process.argv[2];
    }
    // If only up to 3 args, no numbers provided
    else if (process.argv.length <= 3) {
        return "No numbers provided..."
    }
    // If 3rd arg is plus, loop til end of argv and add to result
    else if (process.argv[2] === "plus") {
        for (let i = 3; i < process.argv.length; i++) {
            result += Number(process.argv[i]);
        }
    }
    // If 3rd arg is minus, set result to first number and subtract the rest
    else if (process.argv[2] === "minus") {
        result = Number(process.argv[3]);
        for (let i = 4; i < process.argv.length; i++) {
            result -= Number(process.argv[i]);
        }
    }
    // Once completed adding or subtracting, return result
    //console.log(result);
    return result;
}

// Don't change anything below this line.
module.exports = calculator;
