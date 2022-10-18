/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
 function calculator() {
    let input = process.argv
    let operator = input[2]
    let total = 0

    if (typeof(operator) != 'string'){
        total = `No operation provided...`
    } 

    else if (process.argv.length < 4){
        total = `No numbers provided...`
    } 

    else if ((operator !== "plus") && (operator !== "minus")){
        total = `Invalid operation: ${operator}`
    } 

    else if (operator === "plus"){
        for (let i = 3; i < input.length; i++)
        total += Number(input[i])   
    }

    else if (operator === "minus"){
        total = input[3]
        for (let i = 4; i < input.length; i++)
        total -= Number(input[i])    
       
    } 
    return total
    
    } // closes function



// Don't change anything below this line.
module.exports = calculator;
