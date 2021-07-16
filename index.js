/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
 function calculator() {
    let total = Number(process.argv[3]);
    let numbers = process.argv.slice(4);
    let operation = process.argv[2]
    if (!operation){
         return "No operation provided...";
    }
       for (i = 0; i < numbers.length; i++){
         let currentNumber = Number(numbers[i]);
         if (operation === "plus"){
             total += currentNumber;
         } else if (operation === "minus"){
             total -= currentNumber;
         } else {
             return `Invalid operation: ${operation}`;
         }
        
     }
 
     if (Number.isNaN(total)){
         return "No numbers provided..."
     } else {
     return total;
     } 
 
 }

// Don't change anything below this line.
module.exports = calculator;
