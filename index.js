/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

//  process.argv.push(command, ...numbers)

function calculator() {

// index 2 is the command 
let command = process.argv[2];
// index 3+ is the array of numbers
let num = process.argv.slice(3).map(Number);

if (!command){
    return "No operation provided...";
}
else if (!num.length){
    return "No numbers provided...";
}
// use the reduce method to iterate through each number
else if (command === "plus"){
    return num.reduce((x, y) => x + y)
}
else if (command === "minus"){
    return num.reduce((a, b) => a - b)
} else {
    return `Invalid operation: ${command}`;
}
}

// Don't change anything below this line.
module.exports = calculator;
