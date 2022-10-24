/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {   
    let arr = process.argv.slice(2);
    let sum = Number(arr[1]);
  
    if (arr[0] === undefined) {
        return "No operation provided...";
    } else if (arr[0] !== 'minus' && arr[0] !== 'plus') {
        return `Invalid operation: ${arr[0]}`;
    } else if (arr[1] === undefined) {
        return ("No numbers provided...");
    }

    if (arr[0] === 'plus') {
        for (let i = 1; i < arr.length - 1; i++) {
            sum += Number(arr[i + 1]);
        }
    } else if (arr[0] === 'minus') {
        for (let i = 1; i < arr.length - 1; i++) {
            sum -= arr[i + 1];
        }
    }

    return sum;
}



// Don't change anything below this line.
module.exports = calculator;
