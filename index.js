/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  let symbol = process.argv[2];
  let numbers = [];
  let sum = 0;
  let diff;

  //Error checking
  if (symbol == undefined) {
    return "No operation provided...";
  } else if (symbol !== "plus" && symbol !== "minus") {
    return `Invalid operation: ${symbol}`;
  }

  //Number checking
  if (process.argv.length < 4) {
    return "No numbers provided...";
  }

  if (symbol == "plus") {
    for (let i = 3; i < process.argv.length; i++) {
      sum += Number(process.argv[i]);
    }
    return sum;
  } else if (symbol == "minus") {
    diff = process.argv[3];
    for (let c = 4; c < process.argv.length; c++) {
      diff -= Number(process.argv[c]);
    } 
    return diff;
  }
}


// Don't change anything below this line.
module.exports = calculator;
