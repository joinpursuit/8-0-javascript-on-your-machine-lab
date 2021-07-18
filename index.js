/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let input = process.argv;
    let operation = input[2];
    let numbers = input.slice(3);
    numbers = numbers.map(Number);
    let total = 0;

    // Plus for loop
    // for (let i = 0; i < numbers.length; i++) {
    //     total += numbers[i];
    // }
    // console.log(total);
    
    // Minus for loop
    // total = numbers[0]; 
    // for (let i = 1; i < numbers.length; i++) {
    //     total -= numbers[i];
    // }
    // console.log(total);



     if (!operation) {
         return 'No operation provided...';
     } else if (numbers == '') {
         return 'No numbers provided...';
     } else if (operation === 'plus') {
        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i];
            console.log(total);
         } return total;
     } else if (operation === 'minus') {
         total = numbers[0];
         for (let i = 1; i < numbers.length; i++) {
             total -= numbers[i];
         } return total;
     } else {
         return `Invalid operation: ${operation}`;
     }
}

// Don't change anything below this line.
module.exports = calculator;
