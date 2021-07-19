/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus",
 which represents the kind of calculation that will be done. 
 Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or 
 subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting 
 all numbers, depending on the arguments added to the command line.
 */

// function calculator() {
// // process is an object. argv the array in the object
// }














// function calculator() {
//     // declare a constant input1 and assign it the value of plus
//     const input1 = 'plus';
//     // declare a constant input2 and assign it the value of minus
//     const input2 = 'minus';

//     // if plus, add certain numbers together
//     // if ('plus')

//     // process is an object, argv is the method which returns an array
//         // argv has 2 default elements

//     return "No operation provided...";
//     //process.argv[2] /* {number} */ 
// }

function calculator() {

    let operation = process.argv[2];
    let numbers = process.argv.slice(3);
    let result = Number(numbers[0]);

    if (!operation) {
        return "No operation provided...";
    } 
    if (!numbers[0]) {
        return "No numbers provided...";
    }
    if (operation !== 'plus' && operation !== 'minus') {
        return `Invalid operation: ${operation}`;
    }
    if (operation === 'plus') {
        for (let i = 1; i < numbers.length; i++) {
            result += Number(numbers[i]);
        }
        return result;
    }
    if (operation === 'minus') {
        for (let i = 1; i < numbers.length; i++) {
            result -= Number(numbers[i]);
        }
        return result;
    }

    // for (const everyNumber of numbers) {
    //     if (operation === 'plus') {
    //     result =+ Number(everyNumber);
    //     return result; 
    //     }
    // }
}





























// Don't change anything below this line.
module.exports = calculator;
