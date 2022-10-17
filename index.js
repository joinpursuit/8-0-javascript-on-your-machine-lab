/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
//  const command = process.argv[2];
//  const number = process.argv[3];
 let result = 0;
 
 function calculator() {
     if (process.argv[2] === undefined) {
         return "No operation provided...";
     } else if (process.argv[3] === undefined) {
         return "No numbers provided...";
     } else {
         for (let i = 3; i < process.argv.length; i++) {
             if (process.argv[2] === 'plus') {
                 result = parseInt(process.argv[i]) + result;
             } else if (process.argv[2] === 'minus') {
                 result = -parseInt(process.argv[i]) + result;
             } else {
                 return `Invalid operation: ${process.argv[2]}`;
             }
         }
     }
     return result;
 }

// Don't change anything below this line.
module.exports = calculator;
