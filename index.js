/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const operator = process.argv[2]
    const arr = process.argv.slice(3)
    for (let i = 0; i < arr.length; i++){
        let sum = 0
        let diff = 0
        let num = parseInt(arr[i])
     if(operator === "plus") {
        return  sum += num
    } else if(operator === "minus") {
        return diff -= num
    } else if(operator !== "plus" || "minus"){
        return "Invalid operation: " + operator
    } else if (operator === null){
        return `No operation provided...`
    } else if (num === null){
        return `No numbers provided...`
}
}
}
calculator();

// Don't change anything below this line.
module.exports = calculator;
