/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    
    // if(numbers.length !== 0) {
    //     if(operation === "plus") {
    //         let sum = 0
    //         for(let number of numbers) {
    //             sum += number;
    //             return sum;
    //         }
    //     } else if(operation === "minus") {
    //         let sum = numbers.shift()
    //         for(let number of numbers) {
    //             sum -= number;
    //             return sum;
    //         }
    //     } else if(!operation) {
    //         return "No operation provided...";
    //     } else {
    //         return `Invalid operation: ${operation}`;
    //     } 
    // } else {
    //     return "No numbers provided...";
    // }  

const operation = process.argv[2]
const numbers = process.argv.slice(3)
    if(!operation) {
        return "No operation provided...";
    } else if(numbers.length === 0)  {
            return "No numbers provided..."
    } else if (operation !== "plus" && operation !== "minus") {
        return `Invalid operation: ${operation}`;
    } else if (operation === "plus") {
        let sum = 0
        for(let number of numbers) {
            sum += Number(number);
        }
            return sum;
    } else if (operation === "minus") {
        let sum = numbers.shift()
        for(let number of numbers) {
            sum -= Number(number);
        } 
            return sum;
    }
}

// Don't change anything below this line.
module.exports = calculator;
