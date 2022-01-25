/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
 function calculator() {
    const input = process.argv;
    const operator = process.argv[2];
    const numArr = input.slice(3);
    let result = Number(numArr[0]);
    if(!operator) {
        result = "No operation provided...";
    }else if (numArr.length === 0) {
        result = "No numbers provided...";
    } else if (operator === "plus") {
        for(let i = 1; i < numArr.length; i++){
            result += Number(numArr[i]);
        }    
    }else if (operator === "minus") {
        for(let i = 1; i < numArr.length; i++){
            result -= Number(numArr[i]);
        }
    }else if (operator !== "plus" && operator !== "minus") {
        result = `Invalid operation: ${operator}`;
    }
   
     return result;
 }

// Don't change anything below this line.
module.exports = calculator;
