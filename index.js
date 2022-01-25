/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents 
 * the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, 
 * from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, 
 * depending on the arguments added to the command line.
 */
//if minus we are going to subtract 
//else it will be add, we add 
//write code that will execute no matter how many #s 
//an array 
//include a loop? .length (process.argv) we have to include this 
function calculator() {
    //path to node program, file path
    // access command line arguments 
    const input = process.argv;
    //placeholder for node run.js (operator)
    const operator = process.argv[2];
    //gives us an empty array
    const numArr = input.slice(3);
    //pulls out numeric value (Number) from array
    let result = Number(numArr[0]);
    //pulls out numeric value (Number) from array
    let result = Number(numArr[0]);
    if (!operator) {
        result = "No operation provided...";    
    } else if (numArr.length === 0) {
        result = "No numbers provided...";
    } else if (operator === "plus") {
        for(let i = 1; i < numArr.length; i++) {
        result += Number(numArr[i]); 
        }
    } else if (operator === "minus") {
        for(let i = 1; i < numArr.length; i++) {
        result -+ Number(numArr[i]);
        }
    } else if (operator !== "plus" && operator !== "minus") {
        result = `Invalid operation: ${operator}`;
    }
    return result;
};

// Don't change anything below this line.
module.exports = calculator;
