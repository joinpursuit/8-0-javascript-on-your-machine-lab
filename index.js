/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  let symbol = process.argv[2];
  let numbers = [];
  //console.log(process.argv);

  //Error checking
  if (symbol == undefined) {
    return "No operation provided...";
  } else if (symbol !== 'plus' && symbol !== 'minus') {
    console.log(symbol);
    return `Invalid operation: ${symbol}`;
  }

  //Number checking
  if (process.argv.length < 4) {
    return "No numbers provided..."
  }

  function numberArray() {

  }

  function addition(numbers) {}

  function subtraction(numbers) {}
}

// Don't change anything below this line.
module.exports = calculator;