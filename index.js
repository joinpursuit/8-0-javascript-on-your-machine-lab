/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    //create variable set to first input
    let calculation = process.argv[2];
    //a variable
    let number;
    //check if theres any errors
    if (calculation === undefined){
        return "No operation provided..."
    } else if (calculation !== "plus" && calculation !== "minus"){
        return `Invalid operation: ${calculation}`
    } else if (process.argv[3] === undefined){
        return "No numbers provided..."
    }
    

    //the calculated price
    // let result;
    // if (calculation === "plus"){
        
    // }
}

// Don't change anything below this line.
module.exports = calculator;
