/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    console.log(process.argv)
    let operator = process.argv[2]
    // checking for no operation
    if (!operator){
        return "No operation provided..."
    } 
    // checking for numbers
    if (process.argv[3] === undefined){
        return "No numbers provided..."
    }
    // check for other operators that are not plus or minus
    if (!(operator.includes("plus") || operator.includes('minus'))) {
        return `Invalid operation: ${operator}`
    }
    // for loop: initialize, condition, change
    let sum = Number(process.argv[3])
    for (let i = 4; i < process.argv.length; i++) {
         // plus operation
    if (operator === "plus") {
        sum += Number(process.argv[i])
    } else if (operator === "minus") {
        sum -= process.argv[i]
    }   
    }// end of for loop

        return sum
    }// end of function



// Don't change anything below this line.
module.exports = calculator;
