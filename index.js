/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  let symbol = process.argv[2];
  let numbers = [];

  console.log(symbol);
  if (symbol == "plus") {
    //this will be the addition. there will need to be a loop
    console.log("I found an addition symbol");
    for (let i = 3; i < process.argv.length; i++) {
      numbers.push(process.argv[i]);
    }
    console.log(numbers);
  } else if (symbol == "minus") {
    //this will be subtraction. again, gonna need a loop.
    console.log("I found a subtraction symbol");
    for (let i = 3; i < process.argv.length; i++) {
      numbers.push(process.argv[i]);
    }
    console.log(numbers);
  } else if (typeof(symbol)=='number') {
    return "No operation provided...";
  } else if (symbol !== "plus" || symbol !== "minus") {
    return "Invalid operation: modulo";
  }

  function addition(numbers) {}

  function subtraction(numbers) {}
}

// Don't change anything below this line.
module.exports = calculator;
