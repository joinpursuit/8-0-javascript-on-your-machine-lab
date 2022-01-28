/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
 function calculator() {
    let myArguments = process.argv.slice(2);
    if (myArguments.length <= 0) return "No operation provided..."

    let myOperator = myArguments.shift() 
    if (myArguments.length <= 0) return "No numbers provided..."

    let result =   parseInt(myArguments[0]) 

    for(i= 1; i < myArguments.length;i++) {
        if(myOperator === 'minus') {
            result = result - parseInt(myArguments[i]) 
        } else if (myOperator === 'plus') {
            result = result + parseInt(myArguments[i])
        } else {
            return `Invalid operation: ${myOperator}`
        }
    }

    return result
}

// Don't change anything below this line.
module.exports = calculator;
