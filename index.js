/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const operator = process.argv[2]
    const arr = process.argv.slice(3)
    if(operator === undefined){
        return `No operation provided...`
    }
    if(arr[0] === undefined){
        return `No numbers provided...`
    }
    if(operator === "plus"){
        let sum = 0 
        for (let i = 0; i < arr.length; i++){
            sum += parseInt(arr[i])
        }
        return sum 
    } 
        if(operator === "minus"){
        let difference = arr[0]
        for (let i = 1; i < arr.length; i++){
            difference -= parseInt(arr[i])
        }
        return difference 
    }
    if(operator !== "plus" || "minus"){
        return "Invalid operation: " + operator
    }
}
calculator();

// Don't change anything below this line.
module.exports = calculator;