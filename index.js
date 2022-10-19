const { run } = require("jest");

/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    console.log(process.argv);
    if (process.argv[3] !== 'plus' || process.argv[3] !== 'minus'){
        return `Invalid operation: ${process.argv[3]}`;
    } else if (process.argv[3] === undefined){
        return 'No numbers provided...';
    }else if (process.argv[2] === undefined){
        return 'No operation provided'
    } else if (process.argv[3] !== 'plus' || 'minus'){
        return `Invalid operation: ${process.argv[3]}`;
    }else if  (process.argv[2] === 'plus'){
        return (Number(process.argv[3] + process.argv [Array.length-1]))
    } else if (process.argv[2] === 'minus'){
        return (Number(process.argv[3] - process.argv [Array.length-1]))
}
}
// Don't change anything below this line.
module.exports = calculator;
