/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let result = 0
    let command = process.argv[2]
    
    if (!command){
        return "No operation provided...";    
    } else if (!process.argv[3]){
        return "No numbers provided...";
    }

    if (command === "plus") {
        for(let c = 3; c < process.argv.length; c++){
            result += Number(process.argv[c]);
        }
        return result;
    } else if (command === "minus") {
        result = process.argv[3]
        for(let c = 4; c < process.argv.length; c++){
            result -= Number(process.argv[c])
        }
        return result;
    } else {
        return `Invalid operation: ${process.argv[2]}`;
    }
    return result
}
// There 2 variables and command contains the index 2 of an array
// using nested conditional and loops several times for the calculator function
// The first is error handling
// If the command of the array index 2 and 3 are the opposite then it will return nothing
// For the plus and minus we have use loops to calculate the first, sexond, and third number of the array index
// Don't change anything below this line.
module.exports = calculator;
